--No. 1a / Menampilkan data polis yang disubmit > tgl 15 Januari berdasarkan birthday bulan 9.
SELECT p.policy_number, p.client_number, c.client_name, c.birth_date, p.policy_submit_date, 
p.premium, p.discount, p.commission, p.agent_code, p.policy_status, p.policy_due_date
FROM t_policy p
JOIN t_client c ON p.client_number = c.client_number
WHERE p.policy_submit_date > '2018-01-15' AND EXTRACT(MONTH FROM c.birth_date) = 9;

--No.1b/Data Polis dengan status Inforce dan kantor agent = Jakarta
SELECT p.policy_number, p.agent_code, t.agent_name, t.agent_office, p.policy_submit_date, 
p.premium, p.discount, p.commission, p.client_number, p.policy_status, p.policy_due_date 
FROM t_policy p
JOIN t_agent t ON p.agent_code = t.agent_code
WHERE p.policy_status = 'Inforce' AND t.agent_office = 'Jakarta';

--No. 1c/Mengupdate kolom Basic_commission dengan rumus (commission/premium)*100
update t_agent 
set basic_commission = ((p.commission/p.premium)*100) 
from t_policy p 
where t_agent.agent_code = p.agent_code

select a.agent_code,agent_name,agent_office,sum((p.commission/p.premium)*100) as basic_commission 
from t_agent a join t_policy p on a.agent_code = p.agent_code
group by a.agent_code,agent_name,agent_office

select * from t_agent

--No. 1d/Mengupdate kolom policy_due_date dengan kondisi tanggal akhir bulan dari 30 Hari setelah tanggal POLICY_SUBMIT_DATE
UPDATE t_policy
SET policy_due_date = DATE_TRUNC('MONTH', policy_submit_date+30) + INTERVAL '1 MONTH - 1 DAY'

select * from t_policy

--No. 1e/data produksi agent dengan nilai premiumnya setelah dipotong DISCOUNT < SATU JUTA
SELECT a.* FROM t_agent a
JOIN t_policy p ON a.agent_code = p.agent_code
WHERE (p.premium - p.discount) < 1000000
ORDER BY (p.premium - p.discount);