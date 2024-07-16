import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles/form.module.css';

const Forum = () => {
  const [items, setItems] = useState([{ name: '', store: '', brand: '', priceFrom: '', priceTo: '' }]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [contactInfo, setContactInfo] = useState({ name: '', contactNumber: '', email: '', address: '', city: '', province: '', postalCode: '' });
  const [shippingMethod, setShippingMethod] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [disclaimerAgreed, setDisclaimerAgreed] = useState(false);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', store: '', brand: '', priceFrom: '', priceTo: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleContactChange = (field, value) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { items, uploadedImage, contactInfo, shippingMethod, termsAgreed, disclaimerAgreed });
  };

  return (
    <div className={styles.formContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>About Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>Contact Us</Link>
            </li>
          </ul>
          <div className={styles.authButtons}>
            <Link href="/login">
              <button className={styles.loginButton}>Login</button>
            </Link>
            <Link href="/signup">
              <button className={styles.signupButton}>Sign up</button>
            </Link>
          </div>
        </nav>
      </header>
      <h1 className={styles.heading}>Shopping Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.subheading}>Please fill the form below</h2>
        {items.map((item, index) => (
          <div key={index} className={styles.itemRow}>
            <label>Item no. {index + 1}</label>
            <input type="text" placeholder="Name of Item" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} />
            <input type="text" placeholder="Preferred Store" value={item.store} onChange={(e) => handleItemChange(index, 'store', e.target.value)} />
            <input type="text" placeholder="Preferred Brand" value={item.brand} onChange={(e) => handleItemChange(index, 'brand', e.target.value)} />
            <input type="text" placeholder="Preferred Price From" value={item.priceFrom} onChange={(e) => handleItemChange(index, 'priceFrom', e.target.value)} />
            <input type="text" placeholder="Preferred Price To" value={item.priceTo} onChange={(e) => handleItemChange(index, 'priceTo', e.target.value)} />
            <button type="button" className={styles.removeButton} onClick={() => handleRemoveItem(index)}>Remove Item</button>
          </div>
        ))}
        <button type="button" className={styles.addButton} onClick={handleAddItem}>Add Item</button>

        <div className={styles.uploadSection}>
          <label>Do you have an image or link of the item/s you would like to upload?</label>
          <br/>
          <input type="file" onChange={(e) => setUploadedImage(e.target.files[0])} />
        </div>

        <h2 className={styles.subheading}>Contact Information</h2>
        <div className={styles.contactInfo}>
          <input type="text" placeholder="Name" value={contactInfo.name} onChange={(e) => handleContactChange('name', e.target.value)} />
          <input type="text" placeholder="Contact Number" value={contactInfo.contactNumber} onChange={(e) => handleContactChange('contactNumber', e.target.value)} />
          <input type="email" placeholder="Email address" value={contactInfo.email} onChange={(e) => handleContactChange('email', e.target.value)} />
          <input type="text" placeholder="Delivery Address" value={contactInfo.address} onChange={(e) => handleContactChange('address', e.target.value)} />
          <input type="text" placeholder="City" value={contactInfo.city} onChange={(e) => handleContactChange('city', e.target.value)} />
          <input type="text" placeholder="Province" value={contactInfo.province} onChange={(e) => handleContactChange('province', e.target.value)} />
          <input type="text" placeholder="Postal Code" value={contactInfo.postalCode} onChange={(e) => handleContactChange('postalCode', e.target.value)} />
        </div>
        <div className={styles.shippingMethod}>
          <label>Preferred Shipping Method</label>
          <select value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}>
            <option value="">Select</option>
            <option value="Canada Post">Canada Post</option>
            <option value="UPS">UPS</option>
            <option value="FedEx">FedEx</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.termsSection}>
          <p>Note: Please ensure this shipping method is available in your area.</p>
          <p>Important Note about Shipping</p>
          <p>
            We strive to ensure that all orders are processed and shipped with the greatest care. However, once the goods have been shipped and are in transit, we cannot be held responsible for any lost or stolen items. We recommend selecting a shipping option that includes tracking and insurance to safeguard your purchase. Thank you for your understanding.
          </p>
          <label>
            <input type="checkbox" checked={termsAgreed} onChange={() => setTermsAgreed(!termsAgreed)} />
            I agree
          </label>
          <p>Please read this disclaimer</p>
          <p>
            We reserve the right to refuse any orders that may compromise our safety or are deemed inappropriate. This includes, but is not limited to, orders that involve illegal activities, harmful substances, or offensive content. We appreciate your understanding and cooperation in ensuring a safe and respectful environment for all.
          </p>
          <label>
            <input type="checkbox" checked={disclaimerAgreed} onChange={() => setDisclaimerAgreed(!disclaimerAgreed)} />
            I agree
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Forum;