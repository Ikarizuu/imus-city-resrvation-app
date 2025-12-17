-- Insert initial data into employees table
INSERT INTO employees (employeeid, password, first_name, last_name, isAdmin) 
VALUES 
('ADM01', 'admin', 'IT', 'ADMIN', 'admin'),
('EMP01', '123', 'Juan', 'Dela Cruz', 'notAdmin');

-- Insert initial data into reservations table
-- Sample 1: Business Permit Applications
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217001', 'Business Permit Application', 'Juan Dela Cruz', 'juan.dc@email.com', '2024-12-17', '08:30:00', '2024-12-17', 'Complete', 'New business registration processed'),
('241218006', 'Business Permit Application', 'Nancy Wilson', 'nancy.w@email.com', '2024-12-18', '10:30:00', '2024-12-18', 'Complete', 'Renewal completed'),
('241219003', 'Business Permit Application', 'Christopher Martinez', 'chris.m@email.com', '2024-12-19', '09:00:00', '2024-12-19', 'Complete', 'Business expansion permit'),
('241220007', 'Business Permit Application', 'James Hill', 'james.h@email.com', '2024-12-20', '11:00:00', '2024-12-20', 'Complete', 'Small business permit');

-- Sample 2: Marriage Licenses
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217002', 'Marriage License', 'Maria Santos', 'maria.s@email.com', '2024-12-17', '09:00:00', '2024-12-17', 'Complete', 'License issued'),
('241218005', 'Marriage License', 'Mark Miller', 'mark.m@email.com', '2024-12-18', '10:00:00', '2024-12-18', 'Complete', 'Requirements verified'),
('241219002', 'Marriage License', 'Michelle Garcia', 'michelle.g@email.com', '2024-12-19', '08:30:00', '2024-12-19', 'Complete', 'License processed'),
('241220006', 'Marriage License', 'Elizabeth Lopez', 'elizabeth.l@email.com', '2024-12-20', '10:30:00', '2024-12-20', 'Complete', 'Nuptial license');

-- Sample 3: Real Property Tax Payments
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217003', 'Real Property Tax Payment', 'Carlos Reyes', 'carlos.r@email.com', '2024-12-17', '09:30:00', '2024-12-17', 'Complete', 'Annual tax paid'),
('241218007', 'Real Property Tax Payment', 'Robert Taylor', 'robert.t@email.com', '2024-12-18', '11:00:00', '2024-12-18', 'Complete', 'Property tax'),
('241219004', 'Real Property Tax Payment', 'Amanda Robinson', 'amanda.r@email.com', '2024-12-19', '09:30:00', '2024-12-19', 'Complete', 'Tax payment completed'),
('241220001', 'Real Property Tax Payment', 'Joshua Allen', 'joshua.a@email.com', '2024-12-20', '08:00:00', '2024-12-20', 'Complete', 'Real estate tax');

-- Sample 4: Barangay Clearances
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217004', 'Barangay Clearance', 'Ana Torres', 'ana.t@email.com', '2024-12-17', '10:00:00', '2024-12-17', 'Complete', 'Clearance issued'),
('241218001', 'Barangay Clearance', 'James Wilson', 'james.w@email.com', '2024-12-18', '08:00:00', '2024-12-18', 'Complete', 'Employment clearance'),
('241219005', 'Barangay Clearance', 'Kevin Clark', 'kevin.c@email.com', '2024-12-19', '10:00:00', '2024-12-19', 'Complete', 'Business clearance'),
('241220002', 'Barangay Clearance', 'Samantha Young', 'samantha.y@email.com', '2024-12-20', '08:30:00', '2024-12-20', 'Complete', 'Community clearance');

-- Sample 5: Building Permits
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217011', 'Building Permit', 'Roberto Lim', 'roberto.l@email.com', '2024-12-17', '10:30:00', '2024-12-17', 'Cancelled', 'Client cancelled appointment'),
('241218002', 'Building Permit', 'Sarah Johnson', 'sarah.j@email.com', '2024-12-18', '08:30:00', '2024-12-18', 'Complete', 'Construction permit approved'),
('241219006', 'Building Permit', 'Melissa Rodriguez', 'melissa.r@email.com', '2024-12-19', '10:30:00', '2024-12-19', 'Complete', 'Renovation permit'),
('241220003', 'Building Permit', 'Matthew Hernandez', 'matthew.h@email.com', '2024-12-20', '09:00:00', '2024-12-20', 'Complete', 'New construction permit');

-- Sample 6: Police Clearances
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217006', 'Police Clearance', 'Liza Gonzales', 'liza.g@email.com', '2024-12-17', '11:00:00', '2024-12-17', 'Complete', 'Clearance for employment'),
('241218003', 'Police Clearance', 'David Brown', 'david.b@email.com', '2024-12-18', '09:00:00', '2024-12-18', 'Complete', 'Travel clearance'),
('241219007', 'Police Clearance', 'Steven Lewis', 'steven.l@email.com', '2024-12-19', '11:00:00', '2024-12-19', 'Complete', 'Employment clearance'),
('241220004', 'Police Clearance', 'Stephanie King', 'stephanie.k@email.com', '2024-12-20', '09:30:00', '2024-12-20', 'Complete', 'NBI clearance');

-- Sample 7: Community Tax Certificates (Cedula)
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217007', 'Community Tax Certificate', 'Michael Tan', 'michael.t@email.com', '2024-12-17', '11:30:00', '2024-12-17', 'Complete', 'Cedula issued'),
('241218004', 'Community Tax Certificate', 'Lisa Davis', 'lisa.d@email.com', '2024-12-18', '09:30:00', '2024-12-18', 'Complete', 'Community tax certificate'),
('241219001', 'Community Tax Certificate', 'Daniel Thompson', 'daniel.t@email.com', '2024-12-19', '08:00:00', '2024-12-19', 'Complete', 'Cedula processed'),
('241220005', 'Community Tax Certificate', 'Andrew Wright', 'andrew.w@email.com', '2024-12-20', '10:00:00', '2024-12-20', 'Complete', 'Tax certificate');

-- Sample 8: Fire Station Applications
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217008', 'Fire Station Application', 'Carlos Fernandez', 'carlos.f@email.com', '2024-12-17', '13:00:00', '2024-12-17', 'Complete', 'Fire safety inspection'),
('241218008', 'Fire Station Application', 'Maria Rodriguez', 'maria.r@email.com', '2024-12-18', '11:30:00', '2024-12-18', 'Complete', 'Fire drill approval'),
('241219009', 'Fire Station Application', 'Luis Santos', 'luis.s@email.com', '2024-12-19', '13:00:00', '2024-12-19', 'Pending', 'Fire safety certificate'),
('241220008', 'Fire Station Application', 'Andrea Cruz', 'andrea.c@email.com', '2024-12-20', '11:30:00', '2024-12-20', 'Complete', 'Fire exit inspection');

-- Sample 9: Rescheduled Reservations
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217010', 'Real Property Tax Payment', 'Patricia Chen', 'patricia.c@email.com', '2024-12-17', '14:00:00', '2024-12-17', 'Rescheduled', 'Client requested reschedule'),
('241219010', 'Community Tax Certificate', 'Ashley Lee', 'ashley.l@email.com', '2024-12-19', '13:30:00', '2024-12-19', 'Rescheduled', 'Missing documents'),
('241220010', 'Fire Station Application', 'Miguel Reyes', 'miguel.r@email.com', '2024-12-20', '13:30:00', '2024-12-20', 'Rescheduled', 'Rescheduled to next week');

-- Sample 10: Future Appointments (Pending)
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217009', 'Business Permit Application', 'Jose Martinez', 'jose.m@email.com', '2024-12-17', '13:30:00', '2024-12-17', 'Pending', 'Awaiting documents'),
('241218009', 'Building Permit', 'Thomas Moore', 'thomas.m@email.com', '2024-12-18', '13:00:00', '2024-12-18', 'Pending', 'Under review'),
('241218011', 'Police Clearance', 'Jennifer Martin', 'jennifer.m@email.com', '2024-12-18', '13:30:00', '2024-12-18', 'Pending', 'Background check'),
('241219008', 'Community Tax Certificate', 'Ashley Lee', 'ashley.l@email.com', '2024-12-19', '11:30:00', '2024-12-19', 'Pending', 'Document verification');

-- Sample 11: No-show/Cancelled
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('241217005', 'Building Permit', 'Roberto Lim', 'roberto.l@email.com', '2024-12-17', '10:30:00', '2024-12-17', 'Cancelled', 'Client cancelled'),
('241218012', 'Police Clearance', 'Lisa Martin', 'lisa.m@email.com', '2024-12-18', '14:00:00', '2024-12-18', 'Cancelled', 'No-show'),
('241219011', 'Barangay Clearance', 'Nicholas Green', 'nicholas.g@email.com', '2024-12-19', '14:00:00', '2024-12-19', 'Cancelled', 'Business closed'),
('241220009', 'Marriage License', 'Olivia Scott', 'olivia.s@email.com', '2024-12-20', '13:00:00', '2024-12-20', 'Cancelled', 'Cancelled by client');

-- Sample 12: January 2025 Future Appointments
INSERT INTO reservations (queue_id, form_name, full_name, email, reservation_date, reservation_time, action_date, status, remarks) VALUES
('250106001', 'Business Permit Application', 'Dylan Morgan', 'dylan.m@email.com', '2025-01-06', '08:00:00', '2025-01-06', 'Pending', 'New business application'),
('250106002', 'Police Clearance', 'Natalie Bell', 'natalie.b@email.com', '2025-01-06', '08:30:00', '2025-01-06', 'Pending', 'Awaiting documents'),
('250106003', 'Community Tax Certificate', 'Caleb Murphy', 'caleb.m@email.com', '2025-01-06', '09:00:00', '2025-01-06', 'Pending', 'Under review'),
('250106004', 'Marriage License', 'Zoe Bailey', 'zoe.b@email.com', '2025-01-06', '09:30:00', '2025-01-06', 'Pending', 'Processing'),
('250106005', 'Fire Station Application', 'Jordan Rivera', 'jordan.r@email.com', '2025-01-06', '10:00:00', '2025-01-06', 'Pending', 'Fire safety inspection');

-- Insert initial data into statistics table
INSERT INTO statistics (stat_name, stat_value, stat_label, display_order, is_active) VALUES
('population', '539,743', 'Population', 1, TRUE),
('density', '101.56', 'Persons/sq.km.', 2, TRUE),
('households', '130,814', 'Number of households', 3, TRUE),
('growth_rate', '4.24%', 'Population growth rate', 4, TRUE),
('barangays', '97', 'Barangays', 5, TRUE);

-- Insert initial data into news_carousel_items table
INSERT INTO news_carousel_items 
    (title, excerpt, image_path, image_alt, link, display_order, status, news_date) 
VALUES 
    (
        'Imus Pride 2025: Makulay ang Ating Layunin',
        'Celebrating diversity and inclusion in Imus City',
        '2025_July_ImusPride.jpg',
        'Imus Pride 2025 celebration',
        'News/2025_July.html#Up_news426',
        1,
        'active',
        'July'
    ),
    (
        '4 na Imuseño, hinandugan ni Mayor AA ng prosthetic legs',
        'Mayor AA provides prosthetic legs to 4 Imuseño beneficiaries',
        '2025_July_ProstheticLegs.jpg',
        'Prosthetic legs donation ceremony',
        'News/2025_July.html#Up_news425',
        2,
        'active',
        'July'
    ),
    (
        'Mayor AA, nakatanggap ng pagkilala mula BJMP CALABARZON',
        'Mayor AA receives recognition from BJMP CALABARZON',
        '2025_July_MayorNakatanggapNgPagkilalaSaBJMPCALABARZON.jpg',
        'Mayor AA recognition ceremony',
        'News/2025_July.html#Up_news421',
        3,
        'active',
        'July'
    ),
    (
        'Cardinal Tagle bumisita sa Imus LGU',
        'Cardinal Tagle visits Imus LGU for pastoral engagement',
        '2025_July_CardinalTagleBumisitasaImusLGU.jpg',
        'Cardinal Tagle visit to Imus',
        'News/2025_July.html#Up_news420',
        4,
        'active',
        'July'
    ),
    (
        '25 bagong halal na opisyal ng HOA sa Imus, nanumpa',
        '25 newly elected HOA officials in Imus take oath',
        '2025_July_BagongHalalnaOpisyalngHOA.jpg',
        'HOA officials oath taking ceremony',
        'News/2025_July.html#Up_news418',
        5,
        'active',
        'July'
    ),
    (
        'Mayor AA, binisita si Imuseño centenarian Sevilla Ancheta',
        'Mayor AA visits Imuseño centenarian Sevilla Ancheta',
        '2025_July_ImusCentenarianSevillaAncheta.jpg',
        'Mayor visiting centenarian',
        'News/2025_July.html#Up_news414',
        6,
        'active',
        'July'
    );