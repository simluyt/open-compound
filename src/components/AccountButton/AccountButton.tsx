import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core"
import { useState, useEffect } from "react"
import { AccountModal } from "../AccountModal/AccountModal"
import styled from 'styled-components'

export const AccountButton = () => {
    const { account, activateBrowserWallet } = useEthers()
    const ens = useLookupAddress()
    const [showModal, setShowModal] = useState(false)
  
    const [activateError, setActivateError] = useState('')
    const { error } = useEthers()
    useEffect(() => {
      if (error) {
        setActivateError(error.message)
      }
    }, [error])
  
    const activate = async () => {
      setActivateError('')
      activateBrowserWallet()
    }
  
    return (
        <Account>
          <ErrorWrapper>{activateError}</ErrorWrapper>
          {showModal && <AccountModal setShowModal={setShowModal} />}
          {account ? (
            <>
              <AccountLabel onClick={() => setShowModal(!showModal)}>{ens ?? shortenAddress(account)}</AccountLabel>
            </>
          ) : (
            <LoginButton onClick={activate}>Connect</LoginButton>
          )}
        </Account>
      )
    }

const ErrorWrapper = styled.div`
  color: #ff3960;
  overflow: auto;
`

const Account = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: yellow;
  margin: 10px 0px;
`

const LoginButton = styled.button`
  background-color: yellow;
  padding: 10px;
`

const AccountLabel = styled.div`
  display: flex;
  align-items: center;
  pading-left: 8px;
  background-color: yellow;
  font-size: 12px;
  margin: 10px;
`