---
title: "What is the JAMStack?"
date: "2018-09-26"
---

In the old days, we used to write HTML elements into text files and use FTP to transfer those files to remote shared-hosting accounts. It was around that time I learned you could zero out the margin and padding on a `<table>` element, export some slices in ImageReady and reconstruct your design piece by piece, right down to the very pixel. HomeSite 4.0 was my IDE and I can still hear that Ipswitch train-whistle off in the distance.

But that development-process was all about brute-force. We were tightly coupling our presentation rules to our content which meant countless lines of duplication. Forget about maintainability, we mostly concerned with making sure the shopping cart worked or users could access the message boards.

## Separation of Concerns

Then came “the separation of presentation & content” and that shit blew my mind. Simply by abstracting styles to external stylesheets, developers could realize several benefits…

- Increase maintainability of the design
- Increase performance through client-side caching
- Provide semantic context to the browser rendering the document

It just made sense. Keep your concerns separate and save yourself a bunch of hassle. I spent hours tearing apart ZenGarden source code and following everything Eric Meyer or Jeffrey Zeldman did or said.

## Second Verse, Same as the First

Meanwhile, thanks to cheap shared hosting accounts PHP was all the rage. We started installing Wordpress & Joomla, Drupal & Magento. Tightly coupled applications, that is– applications who’s component parts are highly dependent upon one another, were popping up everywhere. Scale was hard, performance sucked and the presentation layer was almost always littered amongst the business logic.

Not long after, Rails made its debut and the idea of an opinionated framework settled in. Once you learned to stop worrying and trust the convention, life got better. But RAD frameworks like Rails or Django suffered the same shortcoming… a tightly coupled set of services that presented tons of vulnerability and single-points of failure.

Scale and performance are hard, applications need babysitters and dev-ops costs are not insignificant. And to make matters worse, as these applications age, most clients are not prepared for the long-term maintenance and support costs that come with operating a legacy monolithic application.

## There is a Better Way

What if I said you could ensure long-term maintainability of a website, increase performance and scalability all while reducing vulnerabilities and costs for both initial development _and_ infrastructure. Sounds crazy right? Meet the JAMStack.

Much like the collective “oh shit” moment we all suffered when Zeldman told us to separate our front-end concerns, the JAMStack encourages us to do the same on the back-end. Decouple and profit.

# What is the JAMStack?

The JAMStack is more of a philosophy than anything. Its a set of principles that when adhered to, can deliver myriad benefit with negligible cost.

> When we talk about “The Stack,” we no longer talk about operating systems, specific web servers, backend programming languages, or databases. The JAMstack is not about specific technologies. It’s a new way of building websites and apps that delivers better performance, higher security, lower cost of scaling, and a better developer experience. – https://jamstack.org/

You can think of the JAMStack as "pre-rendered HTML".

Every time you update content in the CMS, we build a new version of the entire site and deploy it to production. If you made a mistake, you can rollback that deployment with a couple clicks.

Building projects on the JAMStack provides...

## Better Performance

You entire project is deployed to a global CDN. This reduces latency and serves content based on the geographic locations of the user.

## Higher Security

With server-side processes abstracted into micro-service APIs, surface areas for attacks are reduced.

## Cheaper, Easier Scaling

Since all content and assets are served from the edge, we can achieve near infinite scale at a fraction of the cost of scaling a monolithic applications.

## Developer Satisfaction

The JAMStack supports a wide array of front-end frameworks & headless CMSs. Coupled with serverless technologies and APIs, we get dynamic behavior without managing infrastracture.

## Future Proof

Dynamic software gets old and turns into technical debt. Prerendered websites can function for as long as browsers can render HTML.
