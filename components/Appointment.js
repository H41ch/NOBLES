import { useState } from 'react';
import Input from './Input';
import Button from './Button';

function Appointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, phone, service, details });
  };

  return (
    <section className="Appointment">
      <div className="container">
        <form className="Appointment-form" onSubmit={handleSubmit}>
          <h4 className="Appointment-form-title">Make an appointment</h4>
          <div className="Appointment-form-content">
            <Input 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <Input 
              placeholder="Email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            <Input 
              placeholder="Phone Number" 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
            <select 
              value={service} 
              onChange={(e) => setService(e.target.value)} 
              required
            >
              <option value="" disabled>Select Service</option>
              <option value="small-oil-change">Small Oil Change</option>
              <option value="medium-oil-change">Medium Oil Change</option>
              <option value="large-oil-change">Large Oil Change</option>
              <option value="brakes">Brakes & Brake Pipes</option>
              <option value="suspension">Suspension Components</option>
              <option value="clutch">Clutch Works</option>
              <option value="transmission">Transmission</option>
              <option value="dpf-adblue-egr">DPF, AdBlue, EGR Issues</option>
              <option value="fly-wheels">Fly Wheels</option>
              <option value="electrical">Electrical Issues</option>
              <option value="head-gaskets">Head Gaskets</option>
              <option value="diagnostics">Diagnostics</option>
            </select>
            <textarea
              name="details"
              id="details"
              placeholder="Tell us about the car needing service(s)"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            ></textarea>
          </div>
          <Button text="Make an Appointment" type="submit" />
        </form>
        <div className="Appointment-text">
          <div className="Appointment-text-title">
            Maxime placeat facere possimus omnis
          </div>
          <div className="Appointment-text-count">17k</div>
          <div className="Appointment-text-bottom">
            customers served (and counting)
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
    </section>
  );
}

export default Appointment;
