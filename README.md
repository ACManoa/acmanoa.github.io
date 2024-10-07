<h1 align="center">Association for Computing Machinery At Manoa</h1>
<p align="center">
<img height="200" src="./images/logo/ACMLogo_Big.png" alt="Association for Computing Machinery">
</p>

This repository contains the source code for the Association for Computing Machinery At Manoa. The website provides information about various student clubs, their activities, meeting times, and how to join them.

Credit: This website is based on the [Lab Website Template](https://github.com/greenelab/lab-website-template) by the Greene Lab.

## How to Run Locally

To start a test server for the website, use the following command:

```sh
bundle exec jekyll serve
```

## Repo Structure

```
├── _clubs/                 # Markdown files for each club
│   ├── ballroom.md
│   ├── gamedev.md
│   ├── greyhats.md
│   ├── icspark.md
│   └── ...
├── _data/                  # YAML files for data configuration
│   └── types.yaml
├── _includes/              # HTML includes for Jekyll
│   ├── carousel.html
│   ├── cols.html
│   ├── figure.html
│   ├── list.html
│   ├── search-box.html
│   ├── search-info.html
│   ├── section.html
│   └── site-search.html
├── _layouts/               # Layout files for Jekyll
│   ├── default.html
│   └── post.html
├── _posts/                 # Blog posts
│   └── ...
├── _scripts/               # JavaScript files for additional functionality
│   └── dark-mode.js
├── _styles/                # SCSS files for styling
│   └── ...
├── images/                 # Image assets
│   ├── ballroom/
│   ├── gamedev/
│   ├── greyhats/
│   ├── icspark/
│   ├── logo/
│   └── ...
├── SIGS                    # Special Interest Groups index
├── _config.yaml            # Jekyll configuration file
├── Gemfile                 # Gemfile for Ruby dependencies
├── Gemfile.lock            # Lock file for Ruby dependencies
├── README.md               # This README file
└── ...
```