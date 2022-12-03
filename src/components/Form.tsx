
export default function Form() {
    return (
        <div>
            <div className='form--container'>
                <form className='form'>
                    <h2 className="title text-focus-in">Send us an email</h2>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Phone' />
                    <textarea cols={50} rows={8} placeholder="Message"></textarea>
                    <button className='btn contact--btn swing-in-top-fwd'>Submit</button>
                </form>

                <form className='form'>
                    <h2 className="title text-focus-in">Table Reservation</h2>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Phone' />
                    <input
                        type="number"
                        name="quantity"
                        min="1"
                        max="8"
                        placeholder='Max 8'
                    ></input>
                    <textarea cols={50} rows={8} placeholder="Notes"></textarea>
                    <button className='btn contact--btn swing-in-top-fwd'>Make Reservation</button>
                </form>
            </div>
        </div>
    )
}


