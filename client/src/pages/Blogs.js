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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="blogs_card">
                  <img src={blogs} alt="" className="blogs_image" />
                  <p className="blogs_para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
