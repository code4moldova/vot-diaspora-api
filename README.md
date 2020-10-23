# Vot Diaspora backend

[![GitHub contributors](https://img.shields.io/github/contributors/code4romania/standard-repo-template.svg?style=for-the-badge)](https://github.com/code4romania/standard-repo-template/graphs/contributors) [![GitHub last commit](https://img.shields.io/github/last-commit/code4romania/standard-repo-template.svg?style=for-the-badge)](https://github.com/code4romania/standard-repo-template/commits/master) [![License: MPL 2.0](https://img.shields.io/badge/license-MPL%202.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)

Insert bullets description of the project if available.

[See the project live](http://185.181.229.182:4000/swagger/index.html)

Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

[Contributing](#contributing) | [Built with](#built-with) | [Repos and projects](#repos-and-projects) | [Deployment](#deployment) | [Feedback](#feedback) | [License](#license) | [About Code4MD](#about-code4md)

## Contributing

This project is built by amazing volunteers and you can be one of them! Here's a list of ways in [which you can contribute to this project](https://github.com/code4romania/.github/blob/master/CONTRIBUTING.md). If you want to make any change to this repository, please **make a fork first**.

Help us out by testing this project in the [staging environment](INSERT_LINK_HERE). If you see something that doesn't quite work the way you expect it to, open an Issue. Make sure to describe what you _expect to happen_ and _what is actually happening_ in detail.

If you would like to suggest new functionality, open an Issue and mark it as a __[Feature request]__. Please be specific about why you think this functionality will be of use. If you can, please include some visual description of what you would like the UI to look like, if you are suggesting new UI elements. 

## Built With

Dotnet

### Programming languages

C#

### Platforms

### Frontend framework

### Package managers

### Database technology & provider

## Repos and projects

Mention all related repos and projects.

## Deployment

* go to /src
* sudo docker build -t vot:1 -f Dockerfile .
* sudo docker run -it -d -p 4000:80 -p 4043:443 -v "$(pwd)":/src --name vot1 vot:1
* go to localhost:4000/swagger


## Feedback

* Request a new feature on GitHub.
* Vote for popular feature requests.
* File a bug in GitHub Issues.
* Email us with other feedback contact@code4.ro

## License

This project is licensed under the MPL 2.0 License - see the [LICENSE](LICENSE) file for details

## About Code4MD

Started in 2020, Code for Moldova is a civic tech NGO, official member of the Code for All network. We have a community of over 100 volunteers (developers, ux/ui, communications, data scientists, graphic designers, devops, it security and more) who work pro-bono for developing digital solutions to solve social problems. #techforsocialgood. If you want to learn more details about our projects [visit our site](https://www.code4.md/) or if you want to talk to one of our staff members, please e-mail us at contact@code4.md.

Last, but not least, we rely on donations to ensure the infrastructure, logistics and management of our community that is widely spread across 8 timezones, coding for social change to make Moldova and the world a better place. If you want to support us, [you can do it here](https://code4.md/donate/).
