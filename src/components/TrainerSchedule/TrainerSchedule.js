import React, { useState, useEffect } from "react";
import "./TrainerSchedule.css"
import axios from "axios";

const TrainerSchedule = () => {

	function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

	const authHeader = getCookie("authHeader");

	 const time = [
        { id: "null", t: "Select" },
        { id: "7", t: "07:00" },
        { id: "8", t: "08:00" },
        { id: "9", t: "09:00" },
        { id: "10", t: "10:00" },
        { id: "11", t: "11:00" },
        { id: "12", t: "12:00" },
        { id: "13", t: "13:00" },
        { id: "14", t: "14:00" },
        { id: "15", t: "15:00" },
        { id: "16", t: "16:00" },
        { id: "17", t: "17:00" },
        { id: "18", t: "18:00" },
        { id: "19", t: "19:00" },
    ];

	const [schedule, setSchedule] = useState([
		{ day: "Mon", startTime: "", endTime: "" },
		{ day: "Tue", startTime: "", endTime: "" },
		{ day: "Wed", startTime: "", endTime: "" },
		{ day: "Thu", startTime: "", endTime: "" },
		{ day: "Fri", startTime: "", endTime: "" },
		{ day: "Sat", startTime: "", endTime: "" },
		{ day: "Sun", startTime: "", endTime: "" },
	]);

	const handleTimeChange = (e, id) => {
		const { name, value } = e.target;
		if (value === "Select") return;
		const list = [...schedule];
		list[id][name] = value;
		setSchedule(list);
	};

	function getTrainer() {
		axios
		  .get("http://localhost:8080/users/current", {
			headers: {
			  Authorization: authHeader,
			},
		  })
		  .then((response) => {
			setTrainer(response.data.trainerId);
			console.log(response.data.trainerId);
		  })
		  .catch((err) => console.log(err));
		return trainer;
	  }
	  
	  const [trainer, setTrainer] = useState('')
	  getTrainer()
    const submitHandler = (e) => {

		let flag = true;

        for(let i = 0; i < schedule.length; i++) {
			let startTime = schedule[i].startTime.substring(0, schedule[i].startTime.indexOf(":"));
			let hourStart = parseInt(startTime, 10);
			let endTime = schedule[i].endTime.substring(0, schedule[i].endTime.indexOf(":"));
			let hoursEnd = parseInt(endTime, 10);

			if(hourStart > hoursEnd){
				alert('Wrong hours!')
				flag = false;
			}
		}

		
		if (flag) {
		axios.patch('http://localhost:8080/trainers/' + trainer,
                [
                    {
						"op": "replace",
						"path": "/workSchedule/opens/0",
						"value": schedule[0].startTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/opens/1",
						"value": schedule[1].startTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/opens/2",
						"value": schedule[2].startTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/opens/3",
						"value": schedule[3].startTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/opens/4",
						"value": schedule[4].startTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/opens/5",
						"value": schedule[5].startTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/opens/6",
						"value": schedule[6].startTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/closes/0",
						"value": schedule[0].endTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/closes/1",
						"value": schedule[1].endTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/closes/2",
						"value": schedule[2].endTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/closes/3",
						"value": schedule[3].endTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/closes/4",
						"value": schedule[4].endTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/closes/5",
						"value": schedule[5].endTime
					},
					{
						"op": "replace",
						"path": "/workSchedule/closes/6",
						"value": schedule[6].endTime
					}
                ],
                {
                    headers: {
                        Authorization: authHeader
                    }
                }
            )
                .then(function (response) {
                    if (response.status === 200) {
                        window.location.href = '/';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
    };
}


	return (
		<div className="backgroundBody">
			<main className='dashboard__main'>
				<h2 className='dashboard__heading'>Select your availability</h2>

				<div className='timezone__wrapper'>
					{schedule.map((sch, id) => (
						<div className='formTrainer' key={id}>
							<p>{sch.day}</p>
							<div className='select__wrapper'>
								<label htmlFor='startTime'>Start Time</label>
								<select
									name='startTime'
									id='startTime'
									onChange={(e) => handleTimeChange(e, id)}
								>
									{time.map((t) => (
										<option key={t.id} value={t.t} id={t.id}>
											{t.t}
										</option>
									))}
								</select>
							</div>
							<div className='select__wrapper'>
								<label htmlFor='endTime'>End Time</label>
								<select
									name='endTime'
									id='endTime'
									onChange={(e) => handleTimeChange(e, id)}
								>
									{time.map((t) => (
										<option key={t.id} value={t.t} id={t.id}>
											{t.t}
										</option>
									))}
								</select>
							</div>
						</div>
					))}
				</div>

				<div className='saveBtn__container'>
					<button className="time_button" onClick={submitHandler}>SAVE SCHEDULES</button>
				</div>
			</main>
		</div>
	);
};

export default TrainerSchedule;
