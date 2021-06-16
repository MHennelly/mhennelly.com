

class App extends React.Component {

    constructor(props) {
	super(props)
	this.state = {srcURL: props.srcURL,
		      R: 100,
		      G: 100,
		      B: 100
		     }
	this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e) {
	e.preventDefault()
	const target = event.target
	const value = target.type === 'checkbox' ? target.checked : target.value
	const name = target.name
	this.setState({
	   [name]: value
	})
	console.log(this.state)
    }
    
    render() {
	let filterURL = 'https://static.mhennelly.com/magick?src=' + this.state.srcURL +
	    '&colorize=' + (100 - this.state.R) + ',' +
	    (100 - this.state.G) + ',' + (100 - this.state.B)
	return (
	    <div class='container-fluid'>
		<div class='col-4 mx-auto' id='main'>
		    <div class='row'>
			<div class='col-4 my-auto'>
			    <img class='img-fluid img-thumbnail' src={filterURL}/>
			    <form>
				<div class='form-group'>
				    <label for='R'>R:</label>
				    <input type='range' class='form-range' onChange={this.handleChange}
					   min='0' max='100' step='10' name='R' id='R'/>
				    <label for='G'>G:</label>
				    <input type='range' class='form-range' onChange={this.handleChange}
					   min='0' max='100' step='10' name='G' id='G'/>
				    <label for='B'>B:</label>
				    <input type='range' class='form-range' onChange={this.handleChange}
					   min='0' max='100' step='10' name='B' id='B'/>
				</div>
			    </form>
			    <a href='https://static.mhennelly.com'>static.mhennelly.com</a>
			</div>
			<div class='col-8 my-auto'>
			    <h1>Mike Hennelly</h1>
			    <p>mike@mhennelly.com</p>
			    <p><a href='https://github.com/mhennelly'>GitHub/MHennelly</a></p>
			    <p><a href='https://linkedin.com/in/mhennelly'>LinkedIn</a></p>
			</div>
		    </div>
		</div>
	    </div>
	)
    }
}

ReactDOM.render(
    <App srcURL='https://mhennelly.com/public/me.jpg'/>,
    document.getElementById('react-container')
)


