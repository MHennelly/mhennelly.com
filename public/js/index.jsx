

class App extends React.Component {

    constructor(props) {
	super(props)
	this.state = {srcURL: props.srcURL,
		      R: 70,
		      G: 30,
		      B: 100,
		      isLoading: false
		     }
	this.handleChange = this.handleChange.bind(this)
	this.handleImageLoad = this.handleImageLoad.bind(this)
    }
    
    handleChange(e) {
	e.preventDefault()
	const target = event.target
	const value = target.type === 'checkbox' ? target.checked : target.value
	const name = target.name
	this.setState({
	    [name]: value,
	    isLoading: true
	})
    }

    handleImageLoad() {
	this.setState({
	    isLoading: false
	})
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
			    <a href={filterURL}>
				<img class='img-fluid img-thumbnail' src={filterURL}
				     onLoad={this.handleImageLoad}
				     onError={this.handleImageLoad} />
			    </a>
			    <form>
				<div class='form-group'>
				    <label for='R'>R:</label>
				    <input type='range' class='form-range' onChange={this.handleChange}
					   min='0' max='100' step='10' value='30' name='R' id='R'/>
				    <label for='G'>G:</label>
				    <input type='range' class='form-range' onChange={this.handleChange}
					   min='0' max='100' step='10' name='G' value='70' id='G'/>
				    <label for='B'>B:</label>
				    <input type='range' class='form-range' onChange={this.handleChange}
					   min='0' max='100' step='10' name='B' value='100' id='B'/>
				</div>
			    </form>
			    {this.state.isLoading ?
			     <div>
				 <strong>Loading...</strong>
				 <div class='spinner-border float-right text-primary spinner-border-sm'
				      role='status' aria-hidden='true'></div>
			     </div>
			     : <a href='https://static.mhennelly.com'>static.mhennelly.com</a> }
			</div>
			<div class='col-8 my-auto'>
			    <h1>Michael Hennelly</h1>
			    <p>Software Engineer | UCLA 2021 </p>
			    <p>mike@mhennelly.com</p>
			    <p><a href='https://github.com/mhennelly'>GitHub</a></p>
			    <p><a href='https://linkedin.com/in/mhennelly'>LinkedIn</a></p>
			</div>
		    </div>
		</div>
	    </div>
	)
    }
}

ReactDOM.render(
    <App srcURL='https://mhennelly.com/public/img/me.jpg'/>,
    document.getElementById('react-container')
)


