---
title: "Static is the New Dynamic"
date: "2018-09-26"
---

In the old days, we used to write HTML in text files and use FTP to transfer them to remote shared-hosting accounts. It was around that time I learned you could zero out the margin and padding on a `<table>` element, export some slices in ImageReady and reconstruct designs piece by piece, right down to the very pixel. [HomeSite 4.0](https://www.irt.org/software/sw012/) was my IDE and I can still hear that [Ipswitch](https://www.ipswitch.com/ftp-client) train-whistle blowing in the distance.

But that development-process was just brute-force. We tightly coupled our presentation rules to content because it was easy. And it was fast but all this ease lead to countless lines of duplication; an unmanageable mess. Forget about maintainability, we were lucky if it worked in both Netscape and IE.

## Separation of Concerns

Then came “the separation of presentation & content” and that shit blew my mind. Simply by abstracting styles to external stylesheets, developers could realize lots of quick wins…

- Increased maintainability of the design
- Increased performance through client-side caching
- Semantic context

It just made sense. Keep your concerns separate and save yourself a bunch of hassle. I spent hours tearing apart [ZenGarden](http://www.csszengarden.com/) source code and following everything [Eric Meyer](https://meyerweb.com/) or [Jeffrey Zeldman](https://www.zeldman.com/) did or said.

## Second Verse, Same as the First

Meanwhile, thanks to cheap shared hosting accounts PHP was picking up some serious steam. We installed and customized Wordpress, Joomla, Drupal & Magento. Tightly coupled applications were popping up everywhere. Scale was hard, performance sucked and the presentation layer was almost always littered amongst the business logic.

Not long after, Rails made its debut and the idea of an opinionated framework settled in. Once you learned to stop worrying and trust the convention, life got better. But RAD frameworks like Rails or Django suffered the same shortcomings… tightly coupled, tons of vulnerability and single-points of failure, expensive to scale.

Developer ease not withstanding, monolithic applications need babysitters and dev-ops costs aren’t insignificant. And as these applications age, most clients are not prepared for the long-term maintenance and support costs that come with updating a legacy monolith for the next decade.

## Decouple and Profit

What if you could increase performance and scalability of your website while at the same time, reduce costs for both the initial development and the infrastructure to host it?

What if you could increase developer satisfaction while simultaneously reducing your application’s security vulnerabilities?

What if your deployment pipeline continuously delivered your front-end assets to the edge and generated fully-baked build-previews for every commit and pull-request you submit?

Sounds crazy right? Meet [the JAMStack](https://jamstack.org/).

Just as Zeldman told us to separate our front-end concerns, the JAMStack encourages us to do the same with our infrastructure. And it’s awesome.

Thanks to SPA frameworks, innovative upstarts like [Netlify](https://www.netlify.com/) and [Surge.sh](https://surge.sh/) and the recent proliferation of cheap cloud services like [AWS](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/en-us/) or [GCP](https://cloud.google.com/), we get the infinite scale of highly-performant CDNs without sacrificing the dynamic nature of modern web applications. With server-side processes abstracted into micro-service APIs, surface areas for attacks are immediately reduced. And since its just HTML, CSS & Javascript, builds are future-proofed so your client can enjoy the fruit of their investment for as long as browsers render markup.
