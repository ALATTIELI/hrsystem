import React, { useState } from 'react';

const DeclarationForm: React.FC = () => {
  const [uid, setUID] = useState('');
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [passportNo, setPassportNo] = useState('');
  const [idCardNo, setIdCardNo] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
  const [employmentStartDate, setEmploymentStartDate] = useState('');
  const [employmentEndDate, setEmploymentEndDate] = useState('');

  return (
    <div>
      <h2>إقــــرار إســــتلام حقوق</h2>
      <h3>Declaration</h3>

      <label>أقر انا المدعو:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>الرقــــم الموحــد:</label>
      <input value={uid} onChange={(e) => setUID(e.target.value)} />

      <label>الاســـــــــــــــــم:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>الجنـــــــــــسية:</label>
      <input value={nationality} onChange={(e) => setNationality(e.target.value)} />

      <label>رقم الجــــــــواز:</label>
      <input value={passportNo} onChange={(e) => setPassportNo(e.target.value)} />

      <label>رقم بطاقة العمل:</label>
      <input value={idCardNo} onChange={(e) => setIdCardNo(e.target.value)} />

      <p>
        أقر  و بالحالة المعتبرة شرعا و قانوناً و التي تسمح لي بالإقرار و نفاذ التصرفات بانني استلمت مبلغ {amountReceived} درهم لا غير و هي عن كافة حقوقي المترتبة على فترة عملي لدى الكفيل، بما في ذلك الرواتب وبدل الإجازة والمزايا وغيرها. اعتبار من تاريخ بداية عملي {employmentStartDate} و حتى تاريخ استقالتي {employmentEndDate} و هي جميع المستحقات القانونية حسب شروط العقد المبرم بيننا ، وأتعهد بعدم مطالبة كفيلي مستقبلاً بأي مستحقات مالية.
      </p>
      
      <p>
        I acknowledge the legally and legally considered situation that allows me to acknowledge and implement the procedures that i have received an amount of {amountReceived} AED and it is for all my rights arising from my sponsor throughout the period of my employment with him from {employmentStartDate} till {employmentEndDate}, including salaries, vacation allowance, benefits, and others. They are all legal dues according to the terms of the contract concluded between us, and I pledge not to ask any financial dues from my future sponsor.
      </p>

      <p>By signing this form, I declared that my settlement is complete.</p>

      <label>الاسم:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <button>Submit</button>
    </div>
  );
};

export default DeclarationForm;
