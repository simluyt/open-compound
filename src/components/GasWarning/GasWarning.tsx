import React from 'react';
import styled from 'styled-components'
import { useGasPrice } from '@usedapp/core';
import { BigNumber } from 'ethers';

const TopBar = () => {
    const gas : BigNumber | undefined = useGasPrice();
    if (gas !== undefined && gas > BigNumber.from("100000000000")) {
        return (
            <GasBar>
                The Ethereum blockchain is currently congested; transactions are more expensive than usual. Consider waiting to use Compound.
            </GasBar>
        );
    } else {
        return null;
    }

}

export default TopBar;

const GasBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    max-width: 100%;
    min-height: 50px;
    background-color: #303030;
    padding: 0px 20px;
    font-size: 14px;
`