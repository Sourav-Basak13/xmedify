import React from "react";
import OurFamilies from "../../components/OurFamilies/OurFamilies";
import Blogs from "../../components/Blogs/Blogs";
import PatientCaring from "../../components/PatientCaring/PatientCaring";
import Specialists from "../../components/Specialists/Specialists";
import Specialization from "../../components/Specialization/Specialization";
import Offers from "../../components/Offers/Offers";

function Home() {
  return (
    <div>
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
    </div>
  );
}

export default Home;
