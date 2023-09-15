import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3.5em;`

const Box = styled.div`
    width: 27em;
    background-color: black;
    border-radius: 1em;
    padding: 1em;`

const H2 = styled.h2`
    color: white;
    display: flex;
    justify-content: flex-end;
    font-size: 2em;
    margin-right: 1.5em;`

const Button = styled.button`
    width: 3em;
    height: 3em;
    margin-left: 1.2em;
    margin-bottom: 0.5em;
    border: none;
    border-radius: 0.2em;
    font-size: 1.5em;
    ${props => props.$clear && css`
        width: 7.1em;
    `}
    ${props => props.$operation && css`
        color: white;
        background-color: #FF9500;
    `}
    ${props => props.$number && css`
        color: white;
        background-color: #505050;
    `}
    &:hover{
        cursor: pointer;
    }`

function Calculator(){
    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [operator, setOperator] = useState()

    function inputNum(e){
        if (num === 0) setNum(e.target.value)
        else setNum(num + e.target.value)
    }

    function clear(){
        setNum(0)
    }

    function percentage(){
        setNum(num/100)
    }

    function sign(){
        if (num > 0) setNum(-num)
        else setNum(num * (-1))
    }

    function operatorHandle(e){
        setOperator(e.target.value)
        setOldNum(num)
        setNum(0)
    }

    function calculate(){
        if (operator === '/') setNum(oldNum/num)
        if (operator === 'X') setNum(oldNum*num)
        if (operator === '-') setNum(oldNum-num)
        if (operator === '+') setNum(parseFloat(oldNum)+parseFloat(num))
    }

    return(
        <Container>
            <Box>
                <H2>{num}</H2>             
                <Button $clear onClick={clear}>AC</Button>
                <Button onClick={percentage}>%</Button>
                <Button $operation onClick={operatorHandle} value={'/'}>/</Button>
                <Button $number onClick={inputNum} value={7}>7</Button>                
                <Button $number onClick={inputNum} value={8}>8</Button>
                <Button $number onClick={inputNum} value={9}>9</Button>
                <Button $operation onClick={operatorHandle} value={'X'}>X</Button>
                <Button $number onClick={inputNum} value={4}>4</Button>
                <Button $number onClick={inputNum} value={5}>5</Button>
                <Button $number onClick={inputNum} value={6}>6</Button>
                <Button $operation onClick={operatorHandle} value={'-'}>-</Button>
                <Button $number onClick={inputNum} value={1}>1</Button>
                <Button $number onClick={inputNum} value={2}>2</Button>
                <Button $number onClick={inputNum} value={3}>3</Button>
                <Button $operation onClick={operatorHandle} value={'+'}>+</Button>
                <Button onClick={sign}>+/-</Button>
                <Button $number onClick={inputNum} value={0}>0</Button>
                <Button $number onClick={inputNum} value={'.'}>,</Button>
                <Button onClick={calculate}>=</Button>                
            </Box>
        </Container>
    )
}

export default Calculator