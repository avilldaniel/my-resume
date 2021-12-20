import React from "react";
import Card from "../styled-comp/Card";
import Container from "../styled-comp/Container";

const Career = () => {
  return (
    <Container>
      <h1>Career history</h1>
      <Card>
        <h2>Supervisor (May 2017 - Jan. 2019)</h2>
        <h3>Poppy's Frozen Yogurt 🍨</h3>
        <p>
          You can never really forget your first job. Mine's was at a mom n' pop
          yogurt shop. Other than mastering the art of weighing uniquely crafted
          yogurt bowls and scooping cups of frozen (<i>but very yummy</i>)
          Thrifty ice cream, I got a taste of what it was like to be accountable
          and relied upon for maintaining certain responsibilities. And although
          it may have little to no relevance in terms of my programming
          aspirations, I owe a lot to that little corner store and I will
          forever be grateful to the Ramos family for handing me my very first
          check!
        </p>
      </Card>
      <Card>
        <h2>Unemployed (Jan. 2019 - Sept. 2021)</h2>
        <h3>Let me explain ༼ つ ◕_◕ ༽つ</h3>
        <p>
          This gap of unemployment was a rollercoaster of emotions for me. I had
          left my first job in order to prioritize completing my final year of
          college. Soon after graduating, I struggled heavily in trying to land
          another job; oh, and that pandemic thingy definitely didn't help! That
          said, It was a complete misjudgement on my part to assume that doing
          the <i>bare minimum</i> in college⁠—just enough to earn my degree⁠—would
          allow me to make that jump into a professional setting. I lacked
          any kind of portfolio and had nothing but a Bachelor of Arts degree
          and a yogurt shop slapped onto my resume. Fast forward to around the
          month of August, 2021. With no skills, no work experience, and a
          damaged level of confidence, I considered joining the military. I was
          just about ready to make an appointment with a recruiter and all. But
          before I could commit to it, I decided to give myself one last shot.
          One last chance at developing some sort of skill. I would divide my
          days⁠—spent on studying for the CompTIA A+ certification, Web Design &
          Javascript (<i>thanks FreeCodeCamp!!</i>), PowerShell, and blockchain
          development. And I wanted to make sure I gave my 120% before coming to
          a conclusion. And boy was I happy with that decision.
        </p>
        <sup>
          This section will no doubt be omitted once my resume starts to look
          somewhat presentable! 😅
        </sup>
      </Card>
      <Card>
        <h2>IT Asset Technician (Sept. 2021 - Present)</h2>
        <h3>The Cosmopolitan of Las Vegas 🎰</h3>
        <p>
          Finally a job!! The position of IT Asset Tech involves lots of
          level 1 IT work. We mostly handle the <i>tracking</i> of all devices
          used by Cosmo employees. We are also assigned tasks through JIRA
          tickets. And those tickets are usually a combination of system imaging
          (desktop, laptops, POS terminals, etc.), troubleshooting defective
          devices, and conducting RMA requests of said devices if they are
          unable to be troubleshot. We also do lots of Active Directory
          maintenance and assuring all departments of the establishment are
          equipped with the correct access and authorizations to succeed in
          their role.
        </p>
      </Card>
    </Container>
  );
};

export default Career;
