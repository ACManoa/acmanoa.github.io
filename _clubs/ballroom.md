---
name: Ballroom
order: 6
type: SIG
image: ../images/ballroom/BDC_Logo_Black.png
---
<style>
  #map {
    width: 600px;
  }
  a {
    text-decoration: none;

  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }
  .links {
    color: black;
    text-decoration: none;
  }
  .blue-text {
    color: #042d62;
  }
  .yellow-text {
    color: #ffd200;
    font-weight: bold;
  }
  .white-text {
    color: white;
  }
  #yellow-line {
    border: 0.5px solid #ffd200;
    align-content: center;
    justify-content: center;
    width: 25%;
    margin: auto;
    margin-bottom: 40px;
  }
  .section-major {
    background-color: #042d62;
    border-radius: 3px;
    padding: 30px
  }
  #section-header {
    font-family: 'Poppins';
    font-size: 55px;
    line-height: 100%;
  }
  .section-subheader {
    font-family: 'Poppins';
    font-size: 45px;
    line-height: 100%;
  }
  #section-text {
    font-family: 'Poppins'; /*'Poppins';*/ 
    font-size: 20px;
    font-weight: 500;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
  }
  .col {
    display: flex;
    flex-direction: column;
  }
  i {
    font-style: normal;
  }
  .scroll-text i {
    opacity: 0;
    display: inline-block;
    animation: fadeIn 0.5s forwards;
    animation-delay: calc(var(--delay) * 0.1s);
  }

  .nav-col {
    background-color: #ffd166;
    width: 20%;
    margin: none;
    padding: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    border: 1px solid #ffe268;
    z-index: 5000;
  }

  .nav-bar {
    background-color: #ffd166;
    margin: none;
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 5000;
    width: 100%;
    top: 75px;
    left: 0;
  }

  .bdc-logo-figure {
    width: 50%;
    float: right;
    height: auto;
    padding: 0;
    margin: 0;
  }

  .bdc-logo {
    padding: 0; 
    margin: auto; 
    height: 100%;
  }

  .about-section {
    width: 50%;
  }
  
  .directions {
    width: 100%; 
    display: flex; 
    flex-direction: row;
  }

  @media (max-width: 800px) {
    #map {
      width: auto;
    }
    .nav-col {
      width: 100%;
    }
    .nav-bar {
      flex-direction: column;
      top: 100px;
    }
    .bdc-logo-figure {
      float: none;
      margin: auto;
      width: 100%;
    }
    .bdc-logo {
      width: 100%;
    }
    #main-bg {
      padding: 0;
    }
    .about-section {
      width: 100%;
    }
    .directions {
      flex-direction: column;
    }
  }

  .nav-col:hover {
    background-color: #dfb146;
  }
  
  .nav-text {
    margin: 30px auto 30px auto;
  }

  .officer {
    margin: 20px auto 20px auto;
    width: 200px;
    height: 200px;
  }

  .divider {
    height: 150px;
    width: 100%;
  }

  .grey {
    background-color: grey;
    color: grey;
  }

  .dark-blue {
    background-color: #042d62;
    color: #042d62;
  }

  .yellow {
    background-color: #ffd200;
    color: #ffd200;
  }

  .bullets {
    font-weight: bold;
    font-family: 'Poppins';
    font-size: 18px;
  }

  .sub-bullets {
    font-weight: none;
    font-family: 'Poppins';
    font-size: 14px;
  }

  .ul-style {
    color: white;
  }

  .video-container {
    width: 100%;
    max-width: 300px;
    aspect-ratio: 9 / 16;
    overflow: hidden;
    position: relative;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>


<div class="nav-bar">
  <a href="#about" class="links nav-col"><h3 class="nav-text">About</h3></a>
  <a href="#howtojoin" class="links nav-col"><h3 class="nav-text">How to Join</h3></a>
  <a href="#" class="links nav-col"><h3 class="nav-text">BDCUHM</h3></a>
  <a href="#" class="links nav-col"><h3 class="nav-text">News</h3></a>
  <a href="#resources" class="links nav-col"><h3 class="nav-text">Resources</h3></a>
</div>

<br><br>
{% include carousel.html height="50" unit="%" duration="7" number="4" %}
<script>
  document.addEventListener('scroll', function() {
    const scrollText = document.querySelector('.scroll-text');
    const rect = scrollText.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (inView) {
      let spans = scrollText.querySelectorAll('span');
      spans.forEach((span, index) => {
        span.style.setProperty('--delay', index);
      });
    }
  });
</script>
<br id="about">


<div>
  <figure class="bdc-logo-figure">
    <img src="../images/ballroom/BDCUHLogo-removebg-preview.png" title="Ballroom Logo" alt="Ballroom Logo" class="bdc-logo">
  </figure>

  <div class="about-section">
    <h3 class="blue-text scroll-text" id="section-header">What is <span class="yellow-text">Ballroom Dance Club</span>?</h3>

    <p class="blue-text" id="section-text"><b>Ballroom dancing</b> is a fun and engaging physical activity that offers stress relief and opportunities to build friendships with other members. It can help improve your posture, boost your confidence, and even enhance your resume. Interestingly, many of the top Adult Amateur ballroom dancers in the US are <b>Computer Science</b> or <b>Engineering</b> majors and graduates — you might even have one of them interview you for your next job!</p>
  </div>
</div>

<div class="section-major" style="margin-top: 20px">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 id="section-header" style="color: white;">What We Do</h3>

    <p id="section-text" style="color: white">
      Each semester, we learn the basics of various ballroom dances, including the 
      <span class="yellow-text">Waltz</span>, 
      <span class="yellow-text">Cha-cha</span>, 
      <span class="yellow-text">Tango</span>, 
      <span class="yellow-text">Rumba</span>, 
      <span class="yellow-text">Foxtrot</span>, and 
      <span class="yellow-text">Swing</span>.
    
      <br><br>

      Beyond our classes, we have opportunities to perform for the ballroom dance community in Hawaii. We also participate in the ballroom dance competitions held twice a year in the state, and in 2024, we had the chance to compete nationally at the DanceSport Championships.
    
      <br><br>
    
      Typically, we have at least one 
      <span class="yellow-text">performance</span> and one 
      <span class="yellow-text">competition</span> each semester.
    </p>
  </div>
  <hr id="yellow-line">
  <div style="width: 85%; margin: auto; display: flex; justify-content: space-around; margin-bottom: 30px">
    <img src="../images/ballroom/portrait_1.jpg" style="width: 28%">
    <img src="../images/ballroom/portrait_2.jpeg" style="width: 28%">
    <img src="../images/ballroom/portrait_3.JPEG" style="width: 28%">
  </div>
  <a href="#" id="section-text" style="color: #ffd200">VIEW PHOTO LIBRARY</a>
  <br><br>
  <hr id="yellow-line">
</div>

<div class="section-major" style="margin-top: 0px; border: 1px solid grey">
  <div style="width: 90%; padding: 20px; margin: auto">
    <div style="justify-content: center; align-content: center">
      <h3 id="section-header" style="color: white; text-align: center">Everyone is Welcome!</h3>
    </div>
    <p id="section-text" style="color: white">
      The Ballroom Dance Club encourages
      <span class="yellow-text"> non-dancers</span> and 
      <span class="yellow-text"> beginners</span> to join and learn how to ballroom dance. 
      <span class="yellow-text"> No dance experience</span> is required to join the club!
      
      <br><br>
    </p>
    
    <p class="yellow-text" id="section-text" style="text-align: center; font-weight: bold;">Beginner's sessions meet every Tuesday at 6pm in Studio 2 of the Athletic Complex at University of Hawaii at Manoa.</p>
    <div style="margin: 0 auto 0 auto">
      <div class="directions">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d929.3582703804557!2d-157.81881117634862!3d21.293897099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE3JzM4LjciTiAxNTfCsDQ5JzA0LjkiVw!5e0!3m2!1sen!2sus!4v1729291192865!5m2!1sen!2sus" id="map" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="video-container" style="height: 450; margin: auto;">
        <iframe src="https://drive.google.com/file/d/140lvfTjoQ-Ogm__YxoOyb340GfMdKKVS/preview" height="450" allow="autoplay"></iframe>
        </div>
      </div>
    </div>
    
    <p id="section-text" style="color: white">
      <br>

      Our 
      <span class="yellow-text"> beginners session</span> is 6:00pm to 7:30pm, during which we learn 
      <span class="yellow-text"> basic steps</span> of several styles. We continue to build upon them throughout the semester.
      <span class="yellow-text"> Make sure to bring water and wear shoes!</span>
    </p>
  </div>
</div>


<div class="section-major" style="background-color: white" id="howtojoin">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">How to Join</h3>
    <p class="blue-text" id="section-text">
    Join by simply 
    <span class="yellow-text">showing up</span> and 
    <span class="yellow-text">scanning the QR code</span> for our weekly attendance!

    <br><br>
    As part of 
    <span class="yellow-text">ACMānoa</span>, you can join the ACM server and give yourself the 
    <span class="yellow-text">ballroom dance</span> role in the #roles channel. We also have our own ballroom dance club discord server that you can join to connect with the ballroom community here!

    <br><br>
    Follow our instagram, 
    <span class="yellow-text">@bdcuhm</span>, for more updates.
    
    </p>
  </div>
</div>

<div class="divider dark-blue"></div>

<div style="display: flex; flex-direction: row">
  <div style="display: flex; flex-direction: column">
    <h3 class="yellow-text scroll-text" id="section-header">Meet the Instructors!</h3>

    <p class="blue-text" id="section-text">
    Our instructors, <span class="yellow-text">Ravi Narayan and Synthia Sumukti</span>, have been ballroom dancing for over 25 years.  They have represented Hawaii at the USA Dance Nationals Championships since 2015 and compete in all four styles of ballroom dance. They are also the President and Vice-President of the Honolulu Chapter of USA Dance, which is the Recognized Sport Organization for Dancesport under the United States Olympic & Paralympic Committee umbrella.
    </p>
  </div>
  <div style="display: flex; flex-direction: column; padding: auto">
    <div style="display: flex; flex-direction: row; margin: auto">
      <figure class="bdc-logo-figure;" style="padding: auto; margin: auto">
        <img src="../images/ballroom/photo5.JPG" title="Instructor Img 1" class="instructor-img" style="width: 80%; margin: auto; border: 2px solid; border-radius: 5px;">
      </figure>
      <!--
      <figure class="bdc-logo-figure" style="padding:auto">
        <img src="../images/ballroom/instructors_3.jpg" title="Instructor Img 2" class="instructor-img">
      </figure>
      -->
    </div>
  </div>
</div>

<!-- Video links
<div style="display: flex; justify-content: space-between;">
  <div style="width: 32%;">
    <iframe style="width: 100%" src="https://www.youtube.com/embed/9s1qy7VYDQ4?si=KXgOkvtbzspI9ZZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div style="width: 32%;">
    <iframe style="width: 100%" src="https://www.youtube.com/embed/FCrCOw0V7J8?si=1X-GXa8VOD6tT0aS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>

  <div style="width: 32%;">
    <iframe style="width: 100%" src="https://www.youtube.com/embed/sw2X1j38hYs?si=vpRZFJ1zXA_KsGqZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div>
For more videos you can check out our youtube channel: Ballroom Bytes. You can also keep active on our instagram @bdcuhm.

Our beginners session is 6:00pm to 7:30pm, during which we learn basic steps of several styles. We continue to build upon them throughout the semester. Our advanced session is 7:30 pm to 9:00 pm, that’s when we work on technique as well as training students for future performances and competitions. Make sure to wear shoes!
-->

<!-- old map:
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4215024069053!2d-157.82118238886684!3d21.294354980340692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d9bc892b8f3%3A0xfc75af20eb90849!2sUniversity%20of%20Hawai%CA%BBi%20at%20M%C4%81noa%20Athletic%20Complex%20Studios!5e0!3m2!1sen!2sus!4v1728308956017!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
-->


{% include section.html %}

<div class="section-major" style="background-color: #eec100; z-index: -1;">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">Meet the Officers!</h3>
    <div class="container" style="width: 60%; margin: auto">
      <div class="row">
        <div class="col officer">
          <img src="../images/officer/ravi.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>RAVI NARAYAN</b></p>
          <p class="white-text" style="margin: 0">President</p>
        </div>
        <div class="col officer">
          <img src="../images/officer/gregory.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>GERGORY SNYDER</b></p>
          <p class="white-text" style="margin: 0">Vice-President</p>
        </div>
        <div class="col officer">
          <img src="../images/officer/michaella.jpeg" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>MICHAELLA VILLANUEVA</b></p>
          <p class="white-text" style="margin: 0">Treasurer</p>
        </div>
      </div>
      <div class="row">
        <div class="col officer">
          <img src="../images/officer/amanda.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>AMANDA KANTHACK</b></p>
          <p class="white-text" style="margin: 0">Secretary</p>
        </div>
        <div class="col officer">
          <img src="../images/officer/alyssia.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>ALYSSIA CHEN</b></p>
          <p class="white-text" style="margin: 0">Marketing Officer</p>
        </div>
        <div class="col officer">
          <img src="../images/officer/alex.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>ALEX PICKEN</b></p>
          <p class="white-text" style="margin: 0">Communications Officer</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
<div class="divider dark-blue"></div>

<div class="section-major" style="background-color: white" id="news">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">News Cycle</h3>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
-->

<div class="divider" style="background-color: #555555; color: #555555"></div>

<div class="section-major" id="resources">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 id="section-header" style="color: white">Resources</h3>
    <div style="padding: 10px">
      <h3 class="section-subheader" style="color: white">Shoes</h3>
      <p id="section-text" style="color: white; ">
      For the beginners session, you don't need dance shoes to participate. However, if you wanted to perform you would need to buy <span class="yellow-text">ballroom shoes</span>! Here is a quick guide to navigate through which shoes to get.

      <br><br>

      <span class="yellow-text">Follows:</span>
      </p>
      <ul id="section-text" class="ul-style">
        <li class="bullets"><a href="https://www.amazon.com/dp/B07WLQQXFX?ref_=cm_sw_r_apan_dp_KAPEEWMA5R639N40BEXW&fbclid=IwAR1fMSqJhKmUkZVCx_T8uKUk7iYNfKID-Kkpcndk77fg4HLHMUea7s-uteQ">
        Cheapest Option: Amazon RoseMoli Women's Latin Dance Shoes
        </a>
          <ul>
            <li class="sub-bullets">Select color Tan, 2.2 inch heels ~ $30</li>
          </ul>
        
        </li>
      </ul>
      <p id="section-text" class="ul-style" style="display: flex; justify-content: center; align-content: center; color: white; text-align: center">
        The following are more durable options, highly recommended, and can be used for practice and performance.
      </p>
      <ul id="section-text" class="ul-style">
        <li class="bullets">
        <a href="https://www.discountdance.com/dancewear/style_6005.html?fbclid=IwAR2GBzlxReCNBughgesLZ6AUn3WT0ifU7y9XZZP7u-oZo3oyFo_OmPP-6Kg">Discount Dance Ladies Latin/Rhythm</a>
          <ul>
            <li class="sub-bullets">Select color Brown Satin only ~ $60</li>
          </ul>
        </li>

        <li class="bullets">
        <a href="https://www.discountdance.com/dancewear/style_1683.html?fbclid=IwAR0Jf-jriXXyep1_ouHLnsgDrnJ9HgMbV-8dFLiynMeWO4CJn_J5pOYTfu4">Discount Dance Ladies Latin/Rhythm</a>
          <ul>
            <li class="sub-bullets">Select color Brown Satin only ~ $60</li>
          </ul>
        </li>

        <li class="bullets">
        <a href="https://www.discountdance.com/dancewear/style_1692.html?fbclid=IwAR1fMSqJhKmUkZVCx_T8uKUk7iYNfKID-Kkpcndk77fg4HLHMUea7s-uteQ"> Discount Dance Ladies Latin/Rhythm</a>
          <ul>
            <li class="sub-bullets">Select color Brown Satin or Beige Brown ~ $60</li>
          </ul>
        </li>

        <li class="bullets">
        <a href="https://www.stardanceshop.com/70820222.html?fbclid=IwAR14yZczVb5VkdOnb10gdsXQy3NR1CgKfg3jBPst8u0HT9yfIQRjI8ExMQM">Best Quality: StarDanceShopper Scorpio Latin/Rhythm Shoes</a>
          <ul>
            <li class="sub-bullets">~ $80</li>
          </ul>
        </li>
      </ul>
      <p id="section-text" class="ul-style" style="display: flex; justify-content: center; align-content: center; font-weight: bold">
        NOTES: No Silver, Gold or White color
      </p>
      <p id="section-text" class="yellow-text">Leads:</p>
      <ul id="section-text" class="ul-style">
        <li class="bullets">
        <a href="https://www.discountdance.com/dancewear/style_919101.html?fbclid=IwAR2orUhakE3SfTCYI9hmG5sesDoBfXorpu_5v5QMHNmPnF8A4_N-cTmXWfc">Discount Dance Men’s Standard Ballroom Shoes</a>
          <ul>
            <li class="sub-bullets">Select Black Leader ~ $70</li>
          </ul>
        </li>
        <li class="bullets">
        <a href="https://www.stardanceshop.com/250302.html?fbclid=IwAR3l1BOfsYoXsax2yo4ZOnRw31xCUA3qd7nAcVr-3EYJHACUASpHSZLGISI">StarDanceShop Smooth/Standard Ballroom Shoes</a>
          <ul>
            <li class="sub-bullets">Select Black Leather ~ $100</li>
          </ul>
        </li>
      </ul>
      <br>
      <p id="section-text" class="ul-style" style="display: flex; justify-content: center; align-content: center; font-weight: bold; text-align: center">
        In case you are interested in dance pants. Dance pants make a big difference in your ability to move and will improve your quality of dancing. They are more comfortable and easier to dance in than regular pants.
      </p>
      <ul class="ul-style">
        <li class="bullets">
        <a href="https://www.stardanceshop.com/mp104.html?fbclid=IwAR2hl6EdtmdyLthi1eKw586q6uxuM4_izu9YWZFrnQhHawOewisoGUP5zYI">StarDanceShop Dance Pants</a>
          <ul>
            <li class="sub-bullets">~ $90</li>
          </ul>
        </li>
      </ul>

      <h3 class="section-subheader" style="color: white">Hair & Makeup</h3>
      <p id="section-text" style="color: white">
      Ballroom requires a particular look, one very different from your day-to-day look! Here’s some tutorials to help guide you to your 
      <span class="yellow-text">ballroom look</span>. Make sure to try it out on your own before your big day, and reach out to another member if you need help. 
      </p>

      <div style="display: flex; flex-direction: row; justify-content: space-between; margin: auto; width: 80%; height: 200px">
        <div style="width: 45%; height: 100%">
        <iframe width="100%" height="100%"
        src="https://www.youtube.com/embed/U73xhdQnRJc?si=OX-CxJZQ3hgk89pP">
        </iframe>
        </div>

        <div style="width: 45%; height: 100%">
        <iframe width="100%" height="100%"
        src="https://www.youtube.com/embed/lxI0On8ayAM?si=L7XApd24fFIDx-7D">
        </iframe>
        </div>
      </div>

      <p id="section-text" style="color: white;">
      <span class="ul-style" style="display: flex; justify-content: center; align-content: center">
      For individuals with super short hair, hair should be slicked back and neatly groomed.
      </span>
      <br><br>
      Extra Tips:
      <ul>
        <li id="section-text" style="color: white">
        For hair, generally you section out a piece of the front for styling and then use the rest of the hair to form the ponytail that eventually becomes the bun. For the front styling, you can also try  braiding it and then securing it to the back. It does not have to go over both sides either, it typically goes to your right side.
        </li>
      </ul>
      </p>

    </div>
  </div>
</div>

<!--
<div class="section-major" style="background-color: #eec100">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">Competition Prep</h3>
    <div class="container">
      <p id="section-text" class="blue-text">
        Each semester there is at least one local competition occuring, usually near the start of the semester. How do you prepare for it?
      </p>
    </div>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>
-->
<!--

<h2>Officers</h2>

{% include list.html data="members" component="portrait" filters="description:ballroompres" description="ballroompres" %}
{% include list.html data="members" component="portrait" filters="description:ballroomvp" description="ballroomvp" %}
{% include list.html data="members" component="portrait" filters="description:ballroomstaff" description="ballroomstaff" %}
-->