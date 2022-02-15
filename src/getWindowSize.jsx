
import  {Component} from 'react';

class WindowWith extends Component {
    constructor(props) {
       super(props);
       this.state = { windowWidth: window.innerWidth };
     }
   
    handleResize = (e) => {
     this.setState({ windowWidth: window.innerWidth });
    };
   
    componentDidMount() {
     window.addEventListener("resize", this.handleResize);
    };
   
    componentWillUnmount() {
     window.addEventListener("resize", this.handleResize);
    }; 
   
     render() {
       const { windowWidth } = this.state; 
       return <div>Live Width of the Browser: {windowWidth}
       
       </div>

     }
   }
   export default WindowWith;