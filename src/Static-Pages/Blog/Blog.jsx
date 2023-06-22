import React, { useEffect, useState } from "react";
import "./Blog.css";
import RecentCard from "./RecentCard";
import Blogmost from "./blogmostsearch";
import { blogCategoryGetAll, blogGetAll } from "../../redux/action/blogActions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const dispatch = new useDispatch()
  const { t } = useTranslation();
  const blogList = useSelector((state) => state.blogList)
  const { loading } = blogList
  const categoryList = useSelector((state) => state.bCategoryList)
  const { bCategorys } = categoryList

  useEffect(() => {
    dispatch(blogGetAll())
    dispatch(blogCategoryGetAll())
  }, [])
  return loading == false ? (
    <>
      <div className="containers">
        <section className="mainContent">
          <RecentCard />
        </section>
        <div className="w-[90%] ml-auto mr-auto">
          <Blogmost bCategorys={bCategorys} title={t("listCategoryBlog")} />
        </div>
      </div>
    </>
  ) : <div>{t("loading")}...</div>;
};

export default Blog;
