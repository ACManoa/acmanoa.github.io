---
name: Ballroom
order: 6
type: SIG
image: ../images/ballroom/BDC_Logo_Black.png
---
<style>
  html {
    scroll-behavior: smooth;
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
  }

  .nav-bar {
    background-color: #ffd166;
    margin: none;
    display: flex;
    flex-direction: row;
  }

  .nav-col:hover {
    background-color: #dfb146;
  }
  
  .nav-text {
    margin: 30px auto 30px auto;
  }

  .divider {
    height: 150px;
    width: 100%;
  }

  .grey {
    background-color: grey;
    color: grey;
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
<a href="#news" class="links nav-col"><h3 class="nav-text">News</h3></a>
<a href="#resources" class="links nav-col"><h3 class="nav-text">Resources</h3></a>
</div>
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


<div style="height: 506px">
  <figure style="width: 50%; float: right; height: auto; padding: 0; margin: 0">
    <img src="../images/ballroom/BDCUHLogo-removebg-preview.png" title="Ballroom Logo" alt="Ballroom Logo" style="padding: 0; margin: auto; height: 100%">
  </figure>

  <div style="width: 50%">
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

      Beyond our general meetings, we have opportunities to perform for the ballroom dance community in Hawaii. We also participate in the ballroom dance competitions held twice a year in the state, and in 2024, we had the chance to compete nationally at the DanceSport Championships. 
    
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
    
    <p class="yellow-text" id="section-text" style="text-align: center; font-weight: bold;">We meet every Tuesday at 6pm in Studio 2 of the Athletic Complex at University of Hawaii at Manoa.</p>
    <div style="margin: auto">
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d929.3582703804557!2d-157.81881117634862!3d21.293897099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDE3JzM4LjciTiAxNTfCsDQ5JzA0LjkiVw!5e0!3m2!1sen!2sus!4v1729291192865!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    <p id="section-text" style="color: white">
      <br>

      Our 
      <span class="yellow-text"> beginners session</span> is 6:00pm to 7:30pm, during which we learn 
      <span class="yellow-text"> basic steps</span> of several styles. We continue to build upon them throughout the semester. Our 
      <span class="yellow-text"> advanced session</span> is 7:30 pm to 9:00 pm, that’s when we work on 
      <span class="yellow-text"> technique</span> as well as training students for future performances and competitions. 
      <span class="yellow-text"> Make sure to wear shoes!</span>
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

<div class="divider grey"></div>

<div class="section-major" style="background-color: white">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">Meet the Instructors!</h3>
  </div>
  <img src="../images/ballroom/photo5.JPG">
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

<div class="section-major" style="background-color: #eec100">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">Meet the Officers!</h3>
    <div class="container" style="width: 60%; margin: auto">
      <div class="row">
        <div class="col">
          <img src="../images/officer/ravi.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>RAVI NARAYAN</b></p>
          <p class="white-text" style="margin: 0">President</p>
        </div>
        <div class="col">
          <img src="../images/officer/gregory.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>GERGORY SNYDER</b></p>
          <p class="white-text" style="margin: 0">Vice-President</p>
        </div>
        <div class="col">
          <img src="../images/officer/michaella.jpeg" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>MICHAELLA VILLANUEVA</b></p>
          <p class="white-text" style="margin: 0">Treasurer</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src="../images/officer/amanda.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>AMANDA KANTHACK</b></p>
          <p class="white-text" style="margin: 0">Secretary</p>
        </div>
        <div class="col">
          <img src="../images/officer/alyssia.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>ALYSSIA CHEN</b></p>
          <p class="white-text" style="margin: 0">Marketing Officer</p>
        </div>
        <div class="col">
          <img src="../images/officer/alex.png" style="max-width: 150px; border-radius: 5px;">
          <p class="blue-text" style="margin: 0"><b>ALEX PICKEN</b></p>
          <p class="white-text" style="margin: 0">Communications Officer</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="divider grey"></div>

<div class="section-major" style="background-color: white" id="news">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">News Cycle</h3>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<div class="divider grey"></div>

<div class="section-major" id="resources">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 id="section-header" style="color: white">Resources</h3>
    <div style="padding: 10px">
      <h3 class="section-subheader" style="color: white">Shoes</h3>
      <p id="section-text" style="color: white; ">
      For the beginners session, you don't need dance shoes to participate. However, if you wanted to perform you would need to buy <span class="yellow-text">ballroom shoes</span>! Here is a quick guide to navigate through which shoes to get.

      <br><br>

      <span class="yellow-text">Follows:</span>
      <ul class="ul-style">
        <li class="bullets">Cheapest Option: Amazon RoseMoli Women's Latin Dance Shoes
          <ul>
            <li class="sub-bullets">Select color Tan, 2.2 inch heels ~ $30</li>
          </ul>
        
        </li>
      </ul>
      <span class="ul-style" style="display: flex; justify-content: center; align-content: center">
        The following are more durable options, highly recommended, and can be used for practice and performance.
      </span>
      <ul class="ul-style">
        <li class="bullets">Discount Dance Ladies Latin/Rhythm
          <ul>
            <li class="sub-bullets">Select color Brown Satin only ~ $60</li>
          </ul>
        </li>

        <li class="bullets">Discount Dance Ladies Latin/Rhythm
          <ul>
            <li class="sub-bullets">Select color Brown Satin only ~ $60</li>
          </ul>
        </li>

        <li class="bullets">Discount Dance Ladies Latin/Rhythm
          <ul>
            <li class="sub-bullets">Select color Brown Satin or Beige Brown ~ $60</li>
          </ul>
        </li>

        <li class="bullets">Best Quality: StarDanceShopper Scorpio Latin/Rhythm Shoes
          <ul>
            <li class="sub-bullets">~ $80</li>
          </ul>
        </li>
      </ul>
      <span class="ul-style" style="display: flex; justify-content: center; align-content: center; font-weight: bold">
        NOTES: No Silver, Gold or White color
      </span>
      <ul class="ul-style">
      <span class="yellow-text">Follows:</span>
        <li class="bullets">Discount Dance Men’s Standard Ballroom Shoes
          <ul>
            <li class="sub-bullets">Select Black Leader ~ $70</li>
          </ul>
        </li>
        <li class="bullets">StarDanceShop Smooth/Standard Ballroom Shoes
          <ul>
            <li class="sub-bullets">Select Black Leather ~ $100</li>
          </ul>
        </li>
      </ul>
      <br><br><br><br>
      <span class="ul-style" style="display: flex; justify-content: center; align-content: center; font-weight: bold">
        In case you are interested in dance pants. Dance pants make a big difference in your ability to move and will improve your quality of dancing. They are more comfortable and easier to dance in than regular pants.
      </span>
      <ul class="ul-style">
        <li class="bullets">StarDanceShop Dance Pants
          <ul>
            <li class="sub-bullets">~ $90</li>
          </ul>
        </li>
      </ul>
      </p>

      <h3 class="section-subheader" style="color: white">Hair & Makeup</h3>
      <p id="section-text" style="color: white">
      Ballroom requires a particular look, one very different from your day-to-day look! Here’s some tutorials to help guide you to your 
      <span class="yellow-text">ballroom look</span>. Make sure to try it out on your own before your big day, and reach out to another member if you need help. 
      </p>

      <div style="display: flex; flex-direction: row; justify-content: space-between; margin: auto; width: 80%; height: 200px">
        <div style="width: 45%; height: 100%">
        <iframe width="100%" height="100%"
        src="https://youtu.be/U73xhdQnRJc?si=OZYGW-HkLbkeGqx_">
        </iframe>
        </div>

        <div style="width: 45%; height: 100%">
        <iframe width="100%" height="100%"
        src="https://youtu.be/lxI0On8ayAM?si=Q-pXfDHoNajmZane">
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
<!--

<h2>Officers</h2>

{% include list.html data="members" component="portrait" filters="description:ballroompres" description="ballroompres" %}
{% include list.html data="members" component="portrait" filters="description:ballroomvp" description="ballroomvp" %}
{% include list.html data="members" component="portrait" filters="description:ballroomstaff" description="ballroomstaff" %}
-->