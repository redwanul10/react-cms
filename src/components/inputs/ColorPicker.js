import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

const ColorPicker = ({ name, onChange, color }) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    // const [color, setColor] = useState("red")

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker)
    };

    const handleClose = () => {
        setDisplayColorPicker(false)
    };

    const handleChange = (color) => {
        // this.setState({ color: color.rgb })
        // setColor(color.hex)
        onChange(color.hex, name)
    };

    return (
        <div>
            <div className="swatch" onClick={handleClick}>
                <div className="color" style={{ backgroundColor: color }} />
            </div>
            {displayColorPicker ? <div className="popover">
                <div className="cover" onClick={handleClose} />
                <ChromePicker color={color} onChange={handleChange} />
            </div> : null}

        </div>
    );
}

export default ColorPicker;

// class SketchExample extends React.Component {
//   state = {
//     displayColorPicker: false,
//     color: {
//       r: '241',
//       g: '112',
//       b: '19',
//       a: '1',
//     },
//   };

//   handleClick = () => {
//     this.setState({ displayColorPicker: !this.state.displayColorPicker })
//   };

//   handleClose = () => {
//     this.setState({ displayColorPicker: false })
//   };

//   handleChange = (color) => {
//     this.setState({ color: color.rgb })
//   };

//   render() {

//     const styles = reactCSS({
//       'default': {
//         color: {
//           width: '36px',
//           height: '14px',
//           borderRadius: '2px',
//           background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
//         },
//         swatch: {
//           padding: '5px',
//           background: '#fff',
//           borderRadius: '1px',
//           boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
//           display: 'inline-block',
//           cursor: 'pointer',
//         },
//         popover: {
//           position: 'absolute',
//           zIndex: '2',
//         },
//         cover: {
//           position: 'fixed',
//           top: '0px',
//           right: '0px',
//           bottom: '0px',
//           left: '0px',
//         },
//       },
//     });

//     return (
//       <div>
//         <div style={ styles.swatch } onClick={ this.handleClick }>
//           <div style={ styles.color } />
//         </div>
//         { this.state.displayColorPicker ? <div style={ styles.popover }>
//           <div style={ styles.cover } onClick={ this.handleClose }/>
//           <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
//         </div> : null }

//       </div>
//     )
//   }
// }

// export default SketchExample