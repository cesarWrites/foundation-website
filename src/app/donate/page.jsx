"use client";

import { useState } from "react";
import "../styles/donation.css";

export default function DonationPage() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const presetAmounts = {
    USD: [5, 10, 25, 50, 100, 1000],
    KES: [500, 1000, 2500, 5000, 10000, 100000],
  };

  const handleCardClick = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting donation: ${currency} ${amount}, via ${paymentMethod}`);
  };

  return (
    <main className="donation-page">
      {/* Intro */}
      <section className="donation-intro">
        <h1>Support Our Mission</h1>
        <p>
          Your donation helps us fund education for bright and needy students.
          Together, we can transform lives and create opportunities for future
          generations in Kenya.
        </p>
      </section>

      {/* Donation Form */}
      <form className="donation-form" onSubmit={handleSubmit}>
        {/* Currency + Amount */}
        <div className="form-section">
          <label htmlFor="currency">Choose Currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="KES">KShs</option>
          </select>

          <label htmlFor="amount">Enter Amount:</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter custom amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Preset Cards */}
        <div className="amount-cards">
          {presetAmounts[currency].map((val) => (
            <div
              key={val}
              className={`amount-card ${amount == val ? "selected" : ""}`}
              onClick={() => handleCardClick(val)}
            >
              {currency} {val}
            </div>
          ))}
        </div>

        {/* Donor Details */}
        <div className="form-section">
          <label>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
            />
            Donate Anonymously
          </label>

          {!anonymous && (
            <div className="donor-details">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="email" placeholder="Email" required />
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div className="form-section">
          <p>Select Payment Method:</p>
          {["Mpesa", "PayPal", "Credit/Debit Card"].map((method) => (
            <label key={method} className="payment-option">
              <input
                type="radio"
                name="payment"
                value={method}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              {method}
            </label>
          ))}
        </div>

        {/* Payment Display (placeholder for now) */}
        {paymentMethod && (
          <div className="payment-process">
            <p>You selected: {paymentMethod}</p>
            <p>[Payment form/process goes here]</p>
          </div>
        )}

        {/* Submit */}
        <button type="submit" className="donate-btn">
          Complete Donation
        </button>
      </form>
    </main>
  );
}
