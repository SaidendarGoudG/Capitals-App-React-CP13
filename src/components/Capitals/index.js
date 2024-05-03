import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onCapitalChange = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = activeCapitalId => {
    const activeCapitalAndCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCapitalAndCountry
  }

  render() {
    const {activeCapitalId} = this.state
    const {country} = this.getCountry(activeCapitalId)

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              id="capitals"
              name="capitals"
              onChange={this.onCapitalChange}
              value={activeCapitalId}
              className="select-option"
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label" htmlFor="capitals">
              is capital of which country?
            </label>
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
