
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Image1  from  './Images/1.jpg'
import Image2  from  './Images/2.jpg'
import Image3  from  './Images/3.jpg'
import Image4  from  './Images/4.jpg'




function App() {
  return (
    <div className="App"> 

    <div className="navigation_section_wrapper">
    <div className="navigation_section">
        <div className="first_half"> <h2> Devel Up </h2> </div>
        <div className="second_half"> <input type="text" placeholder="Search for Courses"/> </div>
    </div>
    </div>
    <div className="second_section header">
    <div className="box">
       <h2> Make your future ,today </h2>
       <div className="buttons">
          <button> I WANT A JOB </button>
          <button> I WANT A HIRE </button>
       </div>
    </div>
    
    </div>

<div className="third_section">
  <div className="box">
     <div className="boxes">
       <div className="">  <h6> 450 </h6>  <p> Number of courses offered </p>    </div>
       <div className="">  <h6> 450 </h6>  <p> Number of courses offered </p>   </div>
       <div className="">  <h6> 450 </h6>  <p> Number of courses offered </p>   </div>
       <div className="">  <h6> 450 </h6>  <p> Number of courses offered </p>   </div>
       <div className="">  <h6> 450 </h6>  <p> Number of courses offered </p>   </div>
     </div>
     <div className="demo_text">
     <div className="dummy">
     <div className="">     <p   className="text-center">  logoipsum        </p>  </div>
   </div>
   <div className="dummy">      
     <div className="">     <p     className="text-center">  logoipsum     </p>  </div>
   </div>
   <div className="dummy">   
     <div className="">     <p    className="text-center">  logoipsum      </p>   </div>
   </div>
   <div className="dummy">    
     <div className="">     <p   className="text-center">  logoipsum      </p>  </div>
   </div>
   <div className="dummy">    
     <div className="">     <p   className="text-center">  logoipsum        </p> </div>
   </div>
   <div className="dummy">    
     <div className="">     <p   className="text-center">  logoipsum       </p> </div>
   </div>
     </div>
  </div>
</div>




<div className="fourth_section carasoul_section_1">

<OwlCarousel className='owl-theme' loop  margin={10} nav items="1" slideBy="1" slideTransition="all 2s linear" >

<div className="item">
<img src={Image1} alt="" />
</div>

<div className="item">
<img src={Image2} alt="" />
</div>
<div className="item">
<img src={Image3} alt="" />
</div>
<div className="item">
<img src={Image4} alt="" />
</div>

</OwlCarousel>

<div className="box">

<h6>
Best employment opportunities
</h6>

<button className="same_button" >
find your career
</button>

</div>

</div>



<div className="fifth_section_wrapper">
  <div className="fifth_section">
    <div className="heading"> <h4>  Most Popular Courses</h4> </div>
    <div className="cards">
      <div className="my_card">  <div className="image_box">   </div>  <p>  lorem epsum dot </p> </div>
      <div className="my_card">  <div className="image_box">   </div>  <p>  lorem epsum dot </p> </div>
      <div className="my_card">  <div className="image_box">   </div>  <p>  lorem epsum dot </p> </div>
      <div className="my_card">  <div className="image_box">   </div>  <p>  lorem epsum dot </p> </div>
    </div>
  </div>
</div>

<div className="sixth_section_wrapper">
  <div className="sixth_section career_section">
  <div className="heading"> <h4> Top Carrers  </h4> </div>
      <div className="carrers_box">
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> telle caller  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>
         <div className="box">
         <div className="image_box">
         <div className="image"></div>
         <p className="heading text-center"> hello  </p>
         </div>
      </div>

      </div>
  </div>
</div>


<div className="seventh_section carasoul_section_2">



{ <OwlCarousel className='owl-theme' loop  margin={10} nav items="1" slideBy="1" slideTransition="all 2s linear" >


<div className="item">
<img src={Image1} alt="" />
</div>

<div className="item">
<img src={Image2} alt="" />
</div>
<div className="item">
<img src={Image3} alt="" />
</div>
<div className="item">
<img src={Image4} alt="" />
</div>

</OwlCarousel>}

<div className="box">

<h6>
Help you Identify relevant skill gaps in the workforce
</h6>

<button   className="same_button">
Hire Now
</button>

</div>

</div>



<div className="blogs-section_wrapper">

<div className="blogs_section">

  <div className="heading"> <h4>  Blogs  </h4> </div>
  <div className="cards">
    <div className="my_card">
      <div className="image"></div>
      <p> Relay and relay logic: The very start of Programming. </p>
    </div>
    <div className="my_card">
      <div className="image"></div>
      <p> Relay and relay logic: The very start of Programming. </p>
    </div>
    <div className="my_card">
      <div className="image"></div>
      <p> Relay and relay logic: The very start of Programming. </p>
    </div>
    <div className="my_card">
      <div className="image"></div>
      <p>  Relay and relay logic: The very start of Programming. </p>
    </div>
  </div>  
</div>


<div className="featured_section">

  <div className="heading">  <h4>  Featured in the press   </h4>    </div>

  <div className="dummy_flex">
        <div className="">
          <div className="">     <h6>  logoipsum       </h6>  </div>
        </div>
        <div className="">      
          <div className="">     <h6>    logoipsum     </h6>  </div>
        </div>
        <div className="">   
          <div className="">     <h6>   logoipsum      </h6>   </div>
        </div>
        <div className="">    
          <div className="">     <h6>   logoipsum      </h6>  </div>
        </div>
        <div className="">    
          <div className="">     <h6>  logoipsum        </h6> </div>
        </div>
        <div className="">    
          <div className="">     <h6>  logoipsum       </h6> </div>
        </div>
  </div>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ut necessitatibus vero quibusdam, saepe aliquid consectetur aspernatur atque esse iste itaque porro laboriosam suscipit dignissimos est commodi debitis. Beatae, amet!
  Veritatis cum ducimus corrupti laboriosam dolore explicabo ea natus, dolor debitis sunt sint fugiat porro. Corporis et porro consectetur illum dolore, eius autem, temporibus nulla at, cum provident. Ducimus, porro.
  Repellat provident aspernatur neque odit dolorum nisi illum, nesciunt vel est, 
  
  <p>    voluptatum deserunt eaque! Alias, repellat sit obcaecati esse animi ut! Error, blanditiis accusantium. Sed exercitationem aliquid quia error quidem.
  Dolore, facilis aliquam. Sint a iste quasi illum, exercitationem doloremque optio facere et eum eligendi voluptas natus provident sunt eius asperiores laborum temporibus fugiat numquam ullam recusandae nesciunt, reiciendis adipisci.
  Necessitatibus voluptas illo impedit deleniti minus labore voluptate nostrum reprehenderit id, aliquid perferendis vitae nesciunt tempora aut quaerat laboriosam. Adipisci eaque accusamus debitis mollitia aspernatur aliquid dolore. Iure, ipsa quaerat?</p>
 </p>



</div>
</div>



<div className="footer_section_wrapper">

<div className="footer_section">
<div className="first_layout">
    <div className="box">  <h6>stay up and stay updated on your career</h6> <input type="text" placeholder="email" /> </div>
    <div className="box"> <h6>stay connected on social </h6> <div className="logos">
      <div className="logo">logo1</div>
      <div className="logo">logo2</div>
      <div className="logo">logo3</div>
      <div className="logo">logo4</div>
      <div className="logo">logo5</div>
    </div> </div> 
  </div>
  <div className="second_layout">
    <div className="col-lg-3"> <h4> POPULAR COURSES</h4>  <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p> </div>
    <div className="col-lg-2"> <h4> TOP CAREERS</h4> <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>  </div>
    <div className="col-lg-2"> <h4> TOP COMPANIES</h4>  <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>  </div>
    <div className="col-lg-2"> <h4>DEVELOP</h4>  <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>
    <p>loremipsum</p>  </div>

  </div>
  <div className="third_layout">
    <div className="col-lg-4">
    
    <h2>contact us</h2>

    <p>21/23 MG Road,
    Sampangi Ramnagar,
    Bangalore, Karnataka
    560001</p>
    <p>Mobile:+91 98000 98000</p>
    <p>Whats App: +91 98000 98000</p>
    <p>Email: hello@develop.in</p>

    <p>© Development education pvt ltd 2021
    CIN: L01631KA2010PTC096843</p>
    
    </div>
  </div>
</div>
  
</div>


    </div>
  );
}

export default App;
