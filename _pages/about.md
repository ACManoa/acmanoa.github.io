---
layout: archive
title: "About"
permalink: /about/
modified: 2016-03-30
author_profile: true
excerpt: ""
share: false
comments: false
---


The Association for Computing Machinery at Manoa is UH Manoa's student chapter of the <a href="https://www.acm.org/" target="_blank">Association for Computing Machinery</a>. We are a Registered Independent Organization (**RIO**) focused on providing opportunities and resources for our members' personal and professional advancement.

ACManoa has 3 pillars - social, professional, and technical. We hold social activities for our members to have fun as well as develop and strengthen their interpersonal relationships. We strive to connect our members to professionals in the industry, abroad and within the Honolulu community. We are largely comprised of aspiring professionals in the computing industry; accordingly, members in ACManoa are encouraged to join and create Special Interest Groups (SIG) and Playgrounds where they can collaborate on interesting projects


<div class="section-desktop">
  <table>
    <tr>
      <th colspan="5"><h3>Spring 2016 Officer's Board</h3></th>
    </tr>
    <hr>
    {% for officer in site.data.officers %}
        <tr>
          <td>
            <div class="author__avatar">
              <img src="{{ officer.avatar | prepend: "/images/" | prepend: base_path }}" class="" alt="{{ officer.name }}">
            </div>
          </td>
          <td>
            <strong>{{ officer.name }}</strong>
          </td>
          <td>
            <strong>{{ officer.role }}</strong>
          </td>
          <td>
            <strong><i class="fa fa-fw fa-slack"></i> @{{ officer.slack_handle }}</strong>
          </td>
          <td>
            <strong><a href="mailto:{{ officer.email }}"><i class="fa fa-fw fa-envelope-square"></i> {{ officer.email }}</a></strong>
          </td>
        </tr>
        {% if officer.bio %}
          <tr>
            <td colspan="5"><em>{{ officer.bio }}</em></td>
          </tr>
        {% endif %}
    {% endfor %}
  </table>
</div>
<div class="section-mobile">
  <h4>Spring 2016 Officer's Board</h4>
  <hr>

  {% for officer in site.data.officers %}
    <div class="author__avatar">
      <img src="{{ officer.avatar | prepend: "/images/" | prepend: base_path }}" class="" alt="{{ officer.name }}">
    </div>
    <strong>{{ officer.name }}</strong><br>
    <strong>{{ officer.role }}</strong><br>
    <strong><i class="fa fa-fw fa-slack"></i> @{{ officer.slack_handle }}</strong><br>
    <strong><a href="mailto:{{ officer.email }}"><i class="fa fa-fw fa-envelope-square"></i> {{ officer.email }}</a></strong>
    <br>
  {% endfor %}
</div>
