import React from 'react'

const Accordion = () => {
  return (
    <>
      <div class="accordion mt-4" id="accordionExample">
        {/* first Item */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              How do I create an account on the job portal?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            To create an account, click on the "Sign Up" or "Register" button on the homepage. Fill out the required information such as your name, email address, and password. Once submitted, you will receive a confirmation email to activate your account.
            </div>
          </div>
        </div>

         {/* second */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Can I upload my resume on the job portal?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Yes, you can upload your resume on the job portal. After creating an account, go to your profile settings and look for the option to upload your resume. Accepted file formats may include PDF, DOC, or TXT. Make sure to follow any specific instructions provided for the resume upload.
            </div>
          </div>
        </div>

        {/* third */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              How do I apply for a job?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              To apply for a job, click on the job listing to view the details. Look for an "Apply" or "Apply Now" button within the job description. Follow the instructions provided, which may include filling out an application form, attaching your resume, and writing a cover letter. Review your application before submitting it.
            </div>
          </div>
        </div>

{/* Fourth */}

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            What information should I include in my job application?
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body">
A typical job application requires basic personal details, contact information, work experience, education history, and relevant skills. Some applications may also ask for additional documents such as a cover letter, references, or a portfolio. Provide accurate and up-to-date information to enhance your chances of being considered.
            </div>
          </div>
        </div>

{/* Fifth */}
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            How can I edit or update my profile on the job portal?
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
            <div class="accordion-body">
To edit or update your profile, log in to your account and go to the profile settings or dashboard. Look for the "Edit Profile" or similar option. From there, you can modify your personal information, update your resume, add or remove skills, and make any necessary changes. Remember to save your updates before exiting.
            </div>
          </div>
        </div>

      </div></>
  )
}

export default Accordion