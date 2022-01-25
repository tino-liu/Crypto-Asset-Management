import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

const Portfolio = () => {
  return (
    <Wrapper>
      <Title>This is your portfolio</Title>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Balance</th>
              <th>Price</th>
              <th>Allocation</th>
              <th>
                <BsThreeDotsVertical />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="hover">
              <th>5</th>
              <td>Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Indigo</td>
            </tr>
            <tr class="hover">
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Purple</td>
            </tr>
            <tr class="hover">
              <th>7</th>
              <td>Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Yellow</td>
            </tr>
            <tr class="hover">
              <th>8</th>
              <td>Sammy Seston</td>
              <td>Accountant I</td>
              <td>Crimson</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;
