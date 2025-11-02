// For diabetes
fetch('http://127.0.0.1:8000/analyze_diabetes', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      glucose: 130,
      bmi: 32
  }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
