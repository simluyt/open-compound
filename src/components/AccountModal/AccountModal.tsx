import React from 'react'
import { useEthers, getExplorerAddressLink, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { BigNumber } from 'ethers'
import styled from 'styled-components'



const formatter = new Intl.NumberFormat('en-us', {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
})

const formatBalance = (balance: BigNumber | undefined) =>
  formatter.format(parseFloat(formatEther(balance ?? BigNumber.from('0'))))

export type AccountModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const AccountModal = ({ setShowModal }: AccountModalProps) => {
    const { account, chainId, deactivate } = useEthers()
    const balance = useEtherBalance(account)
    if (account && chainId) {
      return (
        <ModalBackground onClick={() => setShowModal(false)}>
          <Modal
            onClick={(e : any) => e.stopPropagation()}
          >
            <TitleRow>
              <span>Account info</span>
              <ClosingButton onClick={() => setShowModal(false)}>X</ClosingButton>
            </TitleRow>
            <AccountInfo>
              <AccountAddress>Address: {account}</AccountAddress>
              <LinkWrapper>
                <a href={getExplorerAddressLink(account, chainId)} target="_blank" rel="noopener noreferrer">
                  Show on etherscan

                </a>
                {window.isSecureContext && (
                  <button onClick={() => console.log(navigator.clipboard.writeText(account))}>Copy to clipboard</button>
                )}
              </LinkWrapper>
              <BalanceWrapper>ETH: {balance && formatBalance(balance)}</BalanceWrapper>
            </AccountInfo>
            <TitleRow>
            <button onClick={() => deactivate()}>Disconnect</button>
            </TitleRow>
          </Modal>
        </ModalBackground>
      )
    } else {
      setShowModal(false)
      return <div />
    }
  }

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const LinkIconWrapper = styled.div`
  width: 12px;
  height: 12px;
`

const BalanceWrapper = styled.div`
  margin-top: 12px;
`

const HistoryWrapper = styled.div``

const AccountAddress = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`

const ClosingButton = styled.button`
  
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  max-width: 600px;
  font-size: 20px;
`

const AccountInfo = styled.div`
  display: block;
  margin: 16px;
  padding: 16px;
  border-radius: 10px;
`

const Modal = styled.div`
  position: fixed;
  width: 600px;
  left: calc(50% - 300px);
  top: 100px;
  background-color: white;
  border-radius: 10px;
  z-index: 3;
`

const ModalBackground = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0px;
  z-index: 2;
  background-color: rgba(235, 232, 223, 0.5);
`