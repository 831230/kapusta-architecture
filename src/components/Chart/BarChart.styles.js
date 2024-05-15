import styled from "styled-components";

export const ChartContainer = styled.div`
z-index: 1;
max-height: 422px;
max-width: 1034px;
margin: 0 auto;
display: flex;
align-item: center;
justify-content: center;
margin-top: 2rem;
border-radius: 30px;
box-shadow: rgba(170, 178, 197, 0.2) 0px 10px 60px 0px;
background: var(--primary-bg-color);
border-radius: 30px;
fill: #fff;
box-shadow: 0 10px 60px 0 rgba(170, 178, 197, 0.2);

@media screen and (max-width: 768ppx) {
    max-width: 300px;
    max-height: 600px;
    }


@media screen and (max-width: 480px) {
max-width: 280px;
max-height: 496px;
}
`;