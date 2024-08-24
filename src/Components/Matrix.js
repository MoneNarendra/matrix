import React from 'react';
import "./Matrix.css"

class Matrix extends React.Component {
    state = {matrix: Array(9).fill(null), clickOrder: []}

     handleClick = (index) => {
        const {matrix, clickOrder} = this.state
        
        if (matrix[index] === null){
            const newMatrix = [...matrix]
            newMatrix[index] = 'green'
            this.setState({matrix:[...newMatrix], clickOrder: [...clickOrder, index]})
        }
        
        if (clickOrder.length === 8){
            setTimeout(() => {
                const newMatrixOrange = Array(9).fill("orange")
                this.setState({matrix:[...newMatrixOrange]})
            }, 1000)
        }
    }
    render(){
        const {matrix} = this.state
        return (
            <div className='matrix'>{matrix.map((color, index) =>  <div key={index} className='box' style={{backgroundColor: color}} onClick={() => this.handleClick(index)}></div>)}</div>
        );
    }
    
};

export default Matrix;