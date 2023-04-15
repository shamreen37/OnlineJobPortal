import React from 'react'

const Profile2 = () => {
  return (
    <div>
      <h3 className='mb-3'> Internship and Work Experience</h3>
      <div className="btn btn-primary mb-3">Add new</div>

      <div className="work-exp-div">
        <h4>  <i class="fa-solid fa-briefcase work-exp-icon me-2"></i>  Web Developer</h4>
        <p>The Asper Team <span>|May-2021-2022</span><span>|Work from Home</span> </p>
        <p>Responsibilities:
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum veritatis hic aspernatur necessitatibus consequatur reprehenderit cupiditate praesentium unde, voluptas illo.
        </p>
        <i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-arrow-up-from-bracket ms-3"></i>
        <i class="fa-regular fa-pen-to-square ms-3"></i>
        <hr />
        {/*========= Modal===========work experience  */}
        
      </div>
      <div className="work-exp-div">
        <h4> <i class="fa-solid fa-briefcase work-exp-icon me-2"></i> Software Developer </h4>
        <p>The Asper Team <span>|May-2021-2022</span><span>|Work from Home</span> </p>
        <p>Responsibilities:
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum veritatis hic aspernatur necessitatibus consequatur reprehenderit cupiditate praesentium unde, voluptas illo.
        </p>
        <i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-arrow-up-from-bracket ms-3"></i>
        <i class="fa-regular fa-pen-to-square ms-3"></i>
        <hr />
        {/*========= Modal===========work experience  */}
        
      </div>
      <div className="work-exp-div">
        <h4> <i class="fa-solid fa-briefcase work-exp-icon me-2"></i> Web Developer</h4>
        <p>The Asper Team <span>|May-2021-2022</span><span>|Work from Home</span> </p>
        <p>Responsibilities:
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum veritatis hic aspernatur necessitatibus consequatur reprehenderit cupiditate praesentium unde, voluptas illo.
        </p>
        <i class="fa-solid fa-trash-can"></i><i class="fa-solid fa-arrow-up-from-bracket ms-3"></i>
        <i class="fa-regular fa-pen-to-square ms-3"></i>
        <hr />
        {/*========= Modal===========work experience  */}
        
      </div>


{/* modal div  */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi placeat odio excepturi quo dolorum nostrum veritatis explicabo autem rem aut officia quis eum voluptate atque, itaque eaque illo? Accusamus?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
{/* modal div close  */}


    </div>
  )
}

export default Profile2