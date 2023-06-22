import React, { useState, useEffect } from "react";
import "./Tpost.css";
import { Link, useParams } from "react-router-dom";
import Carts from "../HomePage/Cart";
import CartBlog from "./CartBlog";
import { useDispatch, useSelector } from "react-redux";
import { blogGetAll, blogGetDetail } from "../../redux/action/blogActions";
const Tpost = () => {
  const params = useParams();
  let idBlog = params.id;
  const dispatch = new useDispatch();
  const blogdetail = useSelector((state) => state.blogDetail);
  const { blog, loading } = blogdetail;
  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  useEffect(() => {
    dispatch(blogGetAll());
    dispatch(blogGetDetail(idBlog));
  }, [idBlog]);
  const filteredBlogs = blogs?.filter(
    (article) => article.category._id === blog?.category
  );

  return loading == false ? (
    <>
      <div>
        <main>
          <div className="Con_Tpost">
            <section className="contentsBlog mtop">
              <img
                src={blog?.images[0].url}
                className="rounded-md h-[40%] w-[80%] object-cover ml-auto mr-auto mb-[20px] block relative rounded-[8px]"
                alt=""
              />

              <div className="titleBlog">
                <h1 className="contentBlog_h1">{blog?.title}</h1>
              </div>
              <div className="w-[80%] mx-auto mt-5 text-[15px] text-left text-justify leading-normal">
                <span>{blog.description}</span>
              </div>
              {/* <div className="pt-10 flex justify-center items-center">
                <div className="contentBlog_diveder "></div>
              </div>
              <div>
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/lixibox-production-uploads/blogs/pictures/16997/original_1682565410.jpeg"
                  className="w-[800px] h-[110px] ml-auto mr-auto "
                  alt=""
                />
              </div>
              <div className="w-[70%] ml-auto mr-auto font-bold">
                <p className="text-left text-[18px]">Quỳnh Thi</p>
                <p className="title">
                  Kiểu tóc xoăn lơi được xem là mái tóc quốc dân vì đi chơi, đi
                  học, đi làm bạn đều có thể sử dụng được. Đây cũng là kiểu tóc
                  uốn mà Quỳnh Thi yêu thích. Cô nàng đã đăng tải lên YouTube
                  một video hướng dẫn chị em cách uốn tóc xoăn phồng mượt tại
                  nhà cực nhanh gọn giúp cải thiện gương mặt. Ngoài dụng cụ như
                  thun, lược chải rối thì đặc biệt không thể thiếu “nhân vật
                  chính” là máy uốn tóc tự xoay ion âm Halio instaCurl Premium.
                </p>
              </div>
              <div>
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/lixibox-production-uploads/blogs/pictures/16996/original_1682565348.png"
                  className="w-[800px] h-[50%] ml-auto mr-auto"
                  alt=""
                />
                <p className="w-[70%] ml-auto mr-auto font-bold text-left mt-10 text-[20px] text-black">
                  Xem Thêm:
                </p>
                <p className="w-[70%] ml-auto mr-auto font-bold text-left mt-10 text-[20px] title_p">
                  <a href="">
                    &gt;&gt;&nbsp;Cuối cùng đã tìm ra siêu phẩm uốn tóc đẹp
                    10/10 khiến Hàn Hằng, Quỳnh Thi và hội gái xinh “mê xỉu”!
                  </a>
                </p>
                <p className="w-[70%] ml-auto mr-auto font-bold text-left mt-10 text-[20px] title_p">
                  <a href="">
                    &gt;&gt;&nbsp;Nàng tóc tẩy nhuộm mạnh tay chi tiền mua 2 máy
                    uốn tóc Halio và cái kết đáng suy ngẫm
                  </a>
                </p>
              </div> */}
              <div>
                <CartBlog filteredBlogs={filteredBlogs} />
              </div>
              {/* <div>
                <Carts />
              </div> */}
            </section>

            <section className="sideContent"></section>
          </div>
        </main>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Tpost;
