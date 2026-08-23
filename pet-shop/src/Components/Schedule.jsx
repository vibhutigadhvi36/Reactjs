function Schedule() {
  return (
    <section className="schedule-section">

      <div className="schedule-box">

        <h2>Schedule A Visit Today!</h2>

        <div className="schedule-form">

          <div className="schedule-field">
            <label>Name</label>

            <input
              type="text"
              placeholder="Type Full Name"
            />
          </div>

          <div className="schedule-field">
            <label>Pet Type</label>

            <div className="select-box">
              <select>
                <option value="">Select Pet Type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>

              <span className="select-arrow">⌄</span>
            </div>
          </div>

          <div className="schedule-field">
            <label>Interest In</label>

            <div className="select-box">
              <select>
                <option value="">Select Service</option>
                <option value="vaccination">Pet Vaccination</option>
                <option value="grooming">Pet Grooming</option>
                <option value="veterinary">Pet Veterinary</option>
                <option value="surgery">Pet Surgery</option>
              </select>

              <span className="select-arrow">⌄</span>
            </div>
          </div>

          <div className="schedule-field">
            <label>Date</label>

            <div className="input-icon-box">
              <input
                type="text"
                placeholder="dd-mm-yyyy"
              />

              <span className="calendar-icon">▣</span>
            </div>
          </div>

          <div className="schedule-field">
            <label>Time</label>

            <div className="input-icon-box">
              <input
                type="text"
                placeholder="08:00 am - 10:00 am"
              />

              <span className="clock-icon">◷</span>
            </div>
          </div>

          <div className="schedule-field">
            <label>Phone</label>

            <input
              type="tel"
              placeholder="+123 888...."
            />
          </div>

        </div>

        <button className="reservation-btn">
          <span>Start A Reservation</span>
          <span className="reservation-arrow">⟶</span>
        </button>

      </div>

    </section>
  );
}

export default Schedule;