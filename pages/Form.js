import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles/form.module.css';

const Forum = () => {
  const [items, setItems] = useState([{ name: '', store: '', brand: '', priceFrom: '', priceTo: '', quantity: '' }]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [contactInfo, setContactInfo] = useState({ name: '', contactNumber: '', email: '', address: '', city: '', province: '', postalCode: '' });
  const [shippingMethod, setShippingMethod] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [disclaimerAgreed, setDisclaimerAgreed] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    items.forEach((item, index) => {
      if (!item.name) newErrors[`name${index}`] = 'Name is required';
      if (!item.store) newErrors[`store${index}`] = 'Store is required';
      if (!item.brand) newErrors[`brand${index}`] = 'Brand is required';
      if (!item.priceFrom) newErrors[`priceFrom${index}`] = 'Price From is required';
      if (!item.priceTo) newErrors[`priceTo${index}`] = 'Price To is required';
      if (!item.quantity) newErrors[`quantity${index}`] = 'Quantity is required';
    });

    if (!contactInfo.name) newErrors.name = 'Name is required';
    if (!contactInfo.contactNumber) newErrors.contactNumber = 'Contact Number is required';
    if (!contactInfo.email) newErrors.email = 'Email is required';
    if (!contactInfo.address) newErrors.address = 'Address is required';
    if (!contactInfo.city) newErrors.city = 'City is required';
    if (!contactInfo.province) newErrors.province = 'Province is required';
    if (!contactInfo.postalCode) newErrors.postalCode = 'Postal Code is required';
    if (!termsAgreed) newErrors.termsAgreed = 'You must agree to the terms';
    if (!disclaimerAgreed) newErrors.disclaimerAgreed = 'You must agree to the disclaimer';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', store: '', brand: '', priceFrom: '', priceTo: '', quantity: '' }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleContactChange = (field, value) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append('items', JSON.stringify(items));
    if (uploadedImage) {
      formData.append('uploadedImage', uploadedImage);
    }
    formData.append('contactInfo', JSON.stringify(contactInfo));
    formData.append('shippingMethod', shippingMethod);
    formData.append('termsAgreed', termsAgreed);
    formData.append('disclaimerAgreed', disclaimerAgreed);
    formData.append('instructions', instructions);

    const response = await fetch('/api/send-form', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      // Clear form after submission
      setItems([{ name: '', store: '', brand: '', priceFrom: '', priceTo: '', quantity: '' }]);
      setUploadedImage(null);
      setContactInfo({ name: '', contactNumber: '', email: '', address: '', city: '', province: '', postalCode: '' });
      setShippingMethod('');
      setTermsAgreed(false);
      setDisclaimerAgreed(false);
      setInstructions('');
      setErrors({});
    } else {
      alert('Failed to submit the form.');
    }
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
        </nav>
      </header>
      <h1 className={styles.heading}>Shopping Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.subheading}>Please fill the form below</h2>
        {items.map((item, index) => (
          <div key={index} className={styles.itemRow}>
            <label>Item no. {index + 1}</label>
            <input type="text" placeholder="Name of Item" value={item.name} onChange={(e) => handleItemChange(index, 'name', e.target.value)} />
            {errors[`name${index}`] && <span className={styles.error}>{errors[`name${index}`]}</span>}
            <input type="text" placeholder="Preferred Store" value={item.store} onChange={(e) => handleItemChange(index, 'store', e.target.value)} />
            {errors[`store${index}`] && <span className={styles.error}>{errors[`store${index}`]}</span>}
            <input type="text" placeholder="Preferred Brand" value={item.brand} onChange={(e) => handleItemChange(index, 'brand', e.target.value)} />
            {errors[`brand${index}`] && <span className={styles.error}>{errors[`brand${index}`]}</span>}
            <input type="text" placeholder="Preferred Price From" value={item.priceFrom} onChange={(e) => handleItemChange(index, 'priceFrom', e.target.value)} />
            {errors[`priceFrom${index}`] && <span className={styles.error}>{errors[`priceFrom${index}`]}</span>}
            <input type="text" placeholder="Preferred Price To" value={item.priceTo} onChange={(e) => handleItemChange(index, 'priceTo', e.target.value)} />
            {errors[`priceTo${index}`] && <span className={styles.error}>{errors[`priceTo${index}`]}</span>}
            <input type="number" placeholder="Quantity" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} />
            {errors[`quantity${index}`] && <span className={styles.error}>{errors[`quantity${index}`]}</span>}
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
          {errors.name && <span className={styles.error}>{errors.name}</span>}
          <input type="text" placeholder="Contact Number" value={contactInfo.contactNumber} onChange={(e) => handleContactChange('contactNumber', e.target.value)} />
          {errors.contactNumber && <span className={styles.error}>{errors.contactNumber}</span>}
          <input type="email" placeholder="Email address" value={contactInfo.email} onChange={(e) => handleContactChange('email', e.target.value)} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
          <input type="text" placeholder="Delivery Address" value={contactInfo.address} onChange={(e) => handleContactChange('address', e.target.value)} />
          {errors.address && <span className={styles.error}>{errors.address}</span>}
          <input type="text" placeholder="City" value={contactInfo.city} onChange={(e) => handleContactChange('city', e.target.value)} />
          {errors.city && <span className={styles.error}>{errors.city}</span>}
          <input type="text" placeholder="Province" value={contactInfo.province} onChange={(e) => handleContactChange('province', e.target.value)} />
          {errors.province && <span className={styles.error}>{errors.province}</span>}
          <input type="text" placeholder="Postal Code" value={contactInfo.postalCode} onChange={(e) => handleContactChange('postalCode', e.target.value)} />
          {errors.postalCode && <span className={styles.error}>{errors.postalCode}</span>}
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

        <div className={styles.instructionsSection}>
          <label>Additional Instructions</label>
          <textarea placeholder="Write your instructions here" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
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
          {errors.termsAgreed && <span className={styles.error}>{errors.termsAgreed}</span>}
          <p>Please read this disclaimer</p>
          <p>
            We reserve the right to refuse any orders that may compromise our safety or are deemed inappropriate. This includes, but is not limited to, orders that involve illegal activities, harmful substances, or offensive content. We appreciate your understanding and cooperation in ensuring a safe and respectful environment for all.
          </p>
          <label>
            <input type="checkbox" checked={disclaimerAgreed} onChange={() => setDisclaimerAgreed(!disclaimerAgreed)} />
            I agree
          </label>
          {errors.disclaimerAgreed && <span className={styles.error}>{errors.disclaimerAgreed}</span>}
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Forum;
