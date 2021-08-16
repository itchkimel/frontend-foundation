import React from "react";

Home.propTypes = {};

export default function Home(props) {
  return (
    <div>
      {props.token === null ? null : (
        <div className="home" >
          <h1> Welcome to The Foundation.</h1>
          <h3>
            The Welch Foundation is a legacy to the world from Robert Alonzo
            Welch, a self-made man with a strong sense of responsibility to
            humankind, an enthusiastic respect for chemistry and a deep love for
            his adopted state of Texas. Mr. Welch came to Houston as a youth and
            later made his fortune in oil and minerals. Over the course of his
            career and life, he became convinced of the importance of chemistry
            for the betterment of the world. He had a belief in science and the
            role it would play in the future. 
            <br/>
            <br/>
            In his will, Mr. Welch stated: “I
            have long been impressed with the great possibilities for the
            betterment of Mankind that lay in the field of research in the
            domain of Chemistry.” With his death in 1952, Mr. Welch left a
            generous portion of his estate to his employees and their families.
            The balance began what is now The Welch Foundation. The Welch
            Foundation, based in Houston, Texas, is one of the nation's largest
            private funding sources for basic chemical research. Since its
            founding in 1954, the organization has contributed to the
            advancement of chemistry through research grants, departmental
            programs, endowed chairs and other special projects at educational
            institutions in Texas. The Foundation hosts an annual chemical
            research conference in Houston that attracts hundreds of the leading
            chemists and sponsors the Welch Award in Chemistry. The Foundation
            also bestows the Norman Hackerman Award in Chemical Research, an
            award that recognizes the work of scientists who are early in their
            careers and working in Texas.
          </h3>
          <h3>Please Login or Signup to continue and submit a request</h3>
        </div>
      )}
    </div>
  );
}
