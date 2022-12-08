import React from "react";
import GeneralHeader from "@utils/GeneralHeader";
import Member from "@components/Staffs/Member";
import { Container } from "./Staffs.styled";

const Staffs = (props) => {
  return (
    <div>
      <GeneralHeader type={props.type} />
      <Container>
        <Member
          job="Janitor"
          name="Kevin Martin"
          url="/images/member/member-1.jpg"
        />
        <Member
          job="Janitor"
          name="Jessica Brown"
          url="/images/member/member-2.jpg"
        />
        <Member
          job="Janitor"
          name="David Cooper"
          url="/images/member/member-3.jpg"
        />
        <Member
          job="Collector"
          name="Sarah Albert"
          url="/images/member/member-4.jpg"
        />
        <Member
          job="Collector"
          name="Mike Hardson"
          url="/images/member/member-5.jpg"
        />
        <Member
          job="Collector"
          name="Christine Eve"
          url="/images/member/member-6.jpg"
        />
      </Container>
    </div>
  );
};

export default Staffs;
