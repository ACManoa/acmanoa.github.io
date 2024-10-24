---
name: Ballroom
order: 6
type: SIG
image: ../images/ballroom/BDC_Logo_Black.png
---
<style>
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
  #section-text {
    font-family: 'Helvetica'; /*'Poppins';*/ 
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

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
</style>
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
<br>


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
      <h3 id="section-header" style="color: white; text-align: center">Everyone is Welcome</h3>
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

<div class="section-major" style="background-color: white">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">Meet the Instructors!</h3>
  </div>
  Note: Placeholder image
  <img src="../images/ballroom/photo5.JPG">
</div>

<div class="section-major">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 id="section-header" style="color: white">Resources</h3>
    <p id="section-text" style="color: white">
    For the beginners session, you don't need dance shoes to participate. However, if you wanted to perform you would need to buy <span class="yellow-text">ballroom shoes</span>! Here is a quick guide to navigate through which shoes to get.
    </p>
  </div>
  

  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>

<div class="section-major" style="background-color: white">
  <div style="width: 90%; padding: 20px; margin: auto">
    <h3 class="blue-text" id="section-header">Membership</h3>
    <p class="blue-text" id="section-text">
  You can also join the acm server and give yourself the ballroom dance role in the #roles channel. We also have our own ballroom dance club discord server that you can join with the following link.
    </p>
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

<!--

<h2>Officers</h2>

{% include list.html data="members" component="portrait" filters="description:ballroompres" description="ballroompres" %}
{% include list.html data="members" component="portrait" filters="description:ballroomvp" description="ballroomvp" %}
{% include list.html data="members" component="portrait" filters="description:ballroomstaff" description="ballroomstaff" %}
-->