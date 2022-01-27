import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { coins } from "../static/coins";

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coins) => (
              <>
                <tr className="hover">
                  <th>
                    <div className="w-6 h-6">
                      <Image src={coins.logo} alt={coins.name} />
                    </div>
                  </th>
                  <td>
                    {coins.name}
                    <div className="text-sm text-gray-400">{coins.sign}</div>
                  </td>
                  <td>
                    {"$"}
                    {coins.balanceCoin}
                    <div className="text-sm text-gray-400">
                      {coins.balanceCoin}
                    </div>
                    <div className="text-sm text-gray-400">{coins.sign}</div>
                  </td>
                  <td>
                    {"$"}
                    {coins.priceUsd}
                    <div
                      style={{
                        color: coins.change < 0 ? "#f0616d" : "#26ad75",
                      }}
                    >
                      {coins.change > 0 && "+"}
                      {coins.change}%
                    </div>
                  </td>
                  <td>
                    {coins.allocation}
                    {"%"}
                  </td>
                  <td>
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              </>
            ))}
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
