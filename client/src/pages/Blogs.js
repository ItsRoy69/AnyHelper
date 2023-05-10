import React, { useState } from "react";

import "../styles/Blogs.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import blogs from "../assets/blogs.jpg";
import { IoMdAddCircleOutline } from "react-icons/io";

const Blogs = () => {
  const [file, setFile] = useState();
  const [blog, setblog] = useState({ blogTitle: "", blogContent: "" });

  const handleBlogChange = (e) => {
    console.log(e.target.value);
    setblog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
      <Navbar />
      {/* ------------------------------BLOGS----------------------------------- */}

      <div className="blogs_section">
        <div className="blogs_container">
          <div className="blogs_head">
            <h1>Blogs you can checkout</h1>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add your blog <IoMdAddCircleOutline size={25} /></button>
          </div>


          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-scrollable modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title modal-header-title" id="staticBackdropLabel">Add your blog here</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="modal-body-parent">

                    <div class="modal-body-parent_contentSections">
                      <label for="formFile" class="form-label modal-body-parent_labels">Upload a cover image</label>
                      <input class="form-control" type="file" id="formFile" onChange={handleChange} />
                      <img src={file} className="modal-body-parent_imagePreview" />
                    </div>

                    <div class="modal-body-parent_contentSections">
                      <label for="floatingTextarea" className=" modal-body-parent_labels">Write your blog title here  </label>
                      <input type="text" name="blogTitle" value={blog.blogTitle} id="" className="form-control" onChange={handleBlogChange} />

                    </div>

                    <div class="modal-body-parent_contentSections">
                      <label for="floatingTextarea" className=" modal-body-parent_labels">Write your blog here  </label>
                      <textarea class="form-control modal-body-parent_blogContent" id="floatingTextarea" onChange={handleBlogChange} name="blogContent" value={blog.blogContent} ></textarea>

                    </div>

                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Upload blog</button>
                </div>
              </div>
            </div>
          </div>


          <div className="blogs_lists">
            <div className="row">
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  Home Salon vision is to Save your time and effort by booking
                   home Beauty services at home in Bangalore. Our beauty professional 
                   will visit at your home, so that have hygienic and mess-free home 
                   salon service in Mumbai. Home Salon services in kolkata as easy, 
                   reliable and delightful as online booking. We connect you with best beauty stylist in Darjeeling near your home
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  Home cleaning Services thoroughly clean every little portion of 
                  your house and incorporates various methods of discarding wastes,
                   cleaning grimy surfaces, tidying and vacuuming, expelling leaves
                    from the garden, Clean drainage, clearing doormats, disinfecting 
                    surface and air, and washing windows. It is necessary for us to deep 
                    clean our home at least twice in a year to maintain it as fresh . 
                    </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  Online medical delivery service provides its customer products of
                   regular/standard medicine, generic medicines, surgical items, cosmetic
                    items and other supplementary products. This will also provide
                     door-to-door delivery service and quick delivery service for urgent requirements.
                      The range of brands and products available at this portal will be larger than local medical shop.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  Are you concerned that your hair is losing its shine? 
                  Are you concerned about the effect unruly hair has on your appearance?
                   You should be familiar with the concept of the haircare sessions.
                    The best thing is that Swagmee provides the most convenient ways 
                    to enjoy haircare services at home. We'll put you in touch with the most 
                    knowledgeable professionals who can provide you with a variety of hair care services for men.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  The first and foremost purpose of online therapy is to 
                  give you a safe space for disclosure. In your online therapy 
                  journey, you will know what an uninterrupted conversation feels like. 
                  It's easier to open up because you feel not judged but understood. 
                  Further, online counselling helps identify triggers for your emotions and
                   allows you to discover your deep-rooted concerns. With trusted counselor guidance and practical tools.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  A sofa is one of the most-used furniture in our homes and is
                   bound to get dirty with accumulation of dust, dirt, and sweat.
                    Sofa cleaning is not easy, but dont fret because there are professional
                     sofa cleaning services at Pepperfry that conduct sofa cleaning with ease and expertise.
                    The sofa dry cleaning services at Pepperfry can be availed online by 
                   visiting the website. But before you venture there, you may want to assess your needs.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  Online grocery shopping is a way of buying food and other household necessities using a
                   web-based shopping service.
                   There are two basic methods that people can use to purchase these items online.
                    One is to order them from a local grocery store 
                   that participates in online shopping. A customer can then arrange for a 
                   home delivery directly from the store, or he can pick up his order
                   at the store once an employee has assembled it. Another common practice is to 
                   order groceries from a large company.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                  Food delivery refers to food pickup and delivery services of prepared meals to consumers 
                  from diners, bars, restaurants, kitchens, catering, and other meal prep businesses.Typically, 
                  customers used to do this over the phone, by calling or texting restaurants.Today, online
                   food delivery is booming.
                   It’s common for people to place orders using apps, websites, and dedicated food delivery platforms.
                   Deliveries include cooked dishes as well as groceries from supermarkets. 
                   Other methods of food deliery.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------FOOTER------------------------------------ */}

      <Footer />
    </>
  );
};

export default Blogs;
