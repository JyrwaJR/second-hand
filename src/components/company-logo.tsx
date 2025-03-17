import React from 'react';

const CompanyLogoSection = () => {
  const companies = [
    {
      name: "Slack",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
    },
    {
      name: "Trello",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png",
    },
    {
      name: "Asana",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1280px-Asana_logo.svg.png",
    },
    {
      name: "Dropbox",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Dropbox_Icon.svg/2560px-Dropbox_Icon.svg.png",
    },
    {
      name: "Zoom",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Zoom_Logo_2022.svg/2560px-Zoom_Logo_2022.svg.png",
    },
  ];

  return (
    <section className="w-full ">
      <div className="container px-4 md:px-6">
      <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-16">
          Trusted by Top Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
          {companies.map((company, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 bg-muted rounded-lg"
            >
              <img
                alt={`${company.name} logo`}
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="60"
                src={company.logo}
                width="120"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogoSection;
