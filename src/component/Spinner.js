
import loading from './loading.gif'
const Spinner =()=> {

    return (
      <div className='text-center'>
        <img  style={{height:"150px", width: "150px"}} src={loading} alt="loading" />
      </div>
    )
  }


export default Spinner