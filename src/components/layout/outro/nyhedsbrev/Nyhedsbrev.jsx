import React from 'react'

const Nyhedsbrev = () => {
    return (
        <div className="bg-white p-2 mt-3">
            <h4>Tilmeld nyhedsbrev</h4>
            <p className="text-right">* skal udfyldes</p>
            <form>
                <label htmlFor="">Email Address *</label>
                <input className="mb-3 w-100" type="email" placeholder="" aria-label="Search" required></input>
                <label htmlFor="">First Name</label>
                <input className="mb-3 w-100" type="text" placeholder="" aria-label="Search" required></input>
                <label htmlFor="">Efternavn</label>
                <input className="mb-3 w-100" type="text" placeholder="" aria-label="Search" required></input>
                <h5 className="mt-3 mb-2">Vælg nyhedsbrev</h5>
                <input type="checkbox" id="moellerup-alle" name="moellerup-alle" value="Alle"></input>
                <label for="moellerup-alle">Møllerup - alle</label>
                <br />
                <input type="checkbox" id="verdensballetten" name="verdensballetten" value="Verdensballetten"></input>
                <label for="verdensballetten">Verdensballetten</label>
                <br />
                <input type="checkbox" id="moellerup-hamp" name="moellerup-hamp" value="Moellerup Hamp"></input>
                <label for="moellerup-hamp">Møllerup Hamp</label>
                <br/>
                <button className="button bg-grey text-white" type="submit">Tilmeld</button>
            </form>
        </div>
    )
}

export default Nyhedsbrev
