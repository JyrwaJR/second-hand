import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
  PrismaClientRustPanicError,
} from "@prisma/client/runtime/library";
import {
  JWTExpired,
  JWTClaimValidationFailed,
  JWEInvalid,
  JWEDecryptionFailed,
} from "jose/errors";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export const onHandleApiError = (error: unknown) => {
  // Handle JWT Errors
  if (error instanceof JWTExpired) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        message: "Token has expired",
      },
      { status: 401 },
    );
  }

  if (error instanceof JWTClaimValidationFailed) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        message: "Token claims validation failed",
      },
      { status: 401 },
    );
  }

  if (error instanceof JWEInvalid || error instanceof JWEDecryptionFailed) {
    return NextResponse.json(
      {
        error: "Invalid JWT",
        message: "Malformed or unsupported JWT",
      },
      { status: 400 },
    );
  }

  // Handle Zod Validation Errors
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: error.issues,
        message: "Validation Error",
      },
      { status: 400 },
    );
  }

  // Handle Prisma Errors
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return NextResponse.json(
          {
            error: "Unique constraint failed",
            message: "Duplicate entry detected",
          },
          { status: 409 },
        );
      case "P2025":
        return NextResponse.json(
          {
            error: "Record not found",
            message: "The requested record does not exist",
          },
          { status: 404 },
        );
      default:
        return NextResponse.json(
          {
            error: `Database error: ${error.code}`,
            message: "An unknown database error occurred",
          },
          { status: 500 },
        );
    }
  }

  if (error instanceof PrismaClientInitializationError) {
    return NextResponse.json(
      {
        error: "Database connection failed",
        message: "Failed to connect to the database",
      },
      { status: 503 }, // Service Unavailable
    );
  }

  if (error instanceof PrismaClientValidationError) {
    return NextResponse.json(
      {
        error: "Invalid Prisma query",
        message: "Prisma query validation failed",
      },
      { status: 400 },
    );
  }

  if (error instanceof PrismaClientRustPanicError) {
    return NextResponse.json(
      {
        error: "Unexpected Prisma error",
        message: "An internal database issue occurred",
      },
      { status: 500 },
    );
  }

  // Handle unknown errors
  return NextResponse.json(
    {
      error: "Unknown Error",
      message: "An internal server error occurred",
    },
    { status: 500 },
  );
};
