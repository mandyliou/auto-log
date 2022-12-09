import React from "react";

class AppointmentHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      vin: '',
      submitted: false,
      hasError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior

    this.setState({ submitted: true }); // set the submitted flag to true

    // filter the appointments based on the vin and completed value
    const appointments = this.state.appointments.filter(
      appointment =>
        appointment.vin === this.state.vin && appointment.completed === true
    );

    if (appointments.length === 0) { // check if the vin exists in the appointments
      window.alert("Error, invalid VIN"); // display an error message
      this.setState({ appointments: [], hasError: true });
      return;
    } else {
        this.setState({ appointments, hasError: false }); // update the state with the filtered appointments
    }
  }

  async componentDidMount() {
    const url = `http://localhost:8080/api/appointments/`;
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      this.setState({ appointments: data.appointments });
    }
  }

  catch (e) {}

  render() {
    return (
      <>
        <h1>Appointment History</h1>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label className="search-label">
            VIN:
            <input
              type="text"
              name="vin"
              value={this.state.vin}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        {this.state.submitted && (
          <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Vehicle Owner</th>
                    <th>Date & Time</th>
                    <th>Reason</th>
                    <th>Technician</th>
                    <th>VIP</th>
                </tr>
            </thead>
            <tbody>
              {this.state.appointments.map(appointment => {
                return (
                  <tr key={appointment.id}>
                    <td>{appointment.vin}</td>
                    <td>{appointment.vehicle_owner}</td>
                    <td>{appointment.date_time}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.technician.name}</td>
                    <td>{appointment.is_vip ? "Yes" : ""}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
export default AppointmentHistory
