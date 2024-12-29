// Assuming you have a Services.js or similar file
function Services() {
  return (
    <section className="Services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="Services-list">
          <ServiceCard title="Small Oil Change" description="Basic oil change service" />
          <ServiceCard title="Medium Oil Change" description="Includes oil filter replacement" />
          <ServiceCard title="Large Oil Change" description="Full oil change service with inspection" />
          <ServiceCard title="Brakes & Brake Pipes" description="Comprehensive brake services" />
          <ServiceCard title="Suspension Components" description="Full suspension services" />
          <ServiceCard title="Clutch Works" description="Clutch repair and replacement" />
          <ServiceCard title="Transmission" description="Transmission repair and service" />
          <ServiceCard title="DPF, AdBlue, EGR Issues" description="Diagnostics and repair" />
          <ServiceCard title="Fly Wheels" description="Fly wheel repair and replacement" />
          <ServiceCard title="Electrical Issues" description="Comprehensive electrical services" />
          <ServiceCard title="Head Gaskets" description="Head gasket repair and replacement" />
          <ServiceCard title="Diagnostics" description="Computer diagnostics and issue finding" />
        </div>
      </div>
    </section>
  );
}

export default Services;
