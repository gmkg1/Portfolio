/**
 * MAHEEN ENGINEER PORTFOLIO
 * AngularJS Single Page Application configuration & logic.
 */
var app = angular.module('portfolioApp', ['ngRoute']);

// Configure Routing
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // Standard hash-based routing is reliable, fast, and does not require server rewrite configuration
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })
        .when('/projects', {
            templateUrl: 'templates/projects.html',
            controller: 'ProjectsController'
        })
        .when('/experience', {
            templateUrl: 'templates/experience.html',
            controller: 'ExperienceController'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
app.controller('ExperienceController', ['$scope', function ($scope) {

    $scope.achievements = [
        {
            type: 'premium',
            colSpan: 'md:col-span-8',
            period: '2026',
            title: 'BACKEND_DEVELOPER',
            description: 'Backend Developer at Kristu Jayanti Software Development Centre.',
            issuer: 'KJSDC',
            icon: 'code'
        },
        {
            type: 'standard',
            colSpan: 'md:col-span-4',
            period: '2025',
            title: 'ML_INTERN',
            description: 'Machine Learning Intern at Unified Mentor.',
            tags: ['AI', 'ML']
        },
        {
            type: 'summit',
            colSpan: 'md:col-span-7',
            period: '2025',
            title: 'WEB_DEVELOPER',
            description: 'Web Developer at Kristu Jayanti Software Development Centre.',
            icon: 'language'
        },
        {
            type: 'scalability',
            colSpan: 'md:col-span-5',
            period: '2025',
            title: 'Freelancer',
            description: 'Freelance web development, excel and Power BI automations and ERPS for businesses and startups.',
            metricValue: '2 CERTS'
        }
    ];

    $scope.timeline2022 = [
        { period: '2026', title: 'BACKEND_DEVELOPER' },
        { period: '2025', title: 'ML_INTERN' },
        { period: '2025', title: 'WEB_DEVELOPER' },
        { period: '2024', title: 'BCA_STARTED' }
    ];

    var scrollHandler = function () {
        var scrolled = window.pageYOffset;
        var medal = document.querySelector('.medal-parallax');
        if (medal) {
            medal.style.transform =
                'translate(-50%, calc(-50% + ' + (scrolled * 0.08) + 'px))';
        }
    };

    window.addEventListener('scroll', scrollHandler);

    $scope.$on('$destroy', function () {
        window.removeEventListener('scroll', scrollHandler);
    });

}]);
// Global App Shell Controller
app.controller('AppController', ['$scope', '$location', function ($scope, $location) {
    // Navigation routing active highlight helper
    $scope.isActive = function (path) {
        return $location.path() === path;
    };

    // Mobile Navbar Menu Collapse State
    $scope.mobileMenuOpen = false;
    $scope.toggleMobileMenu = function () {
        $scope.mobileMenuOpen = !$scope.mobileMenuOpen;
    };

    // Keep mobile menu closed on transition
    $scope.$on('$routeChangeStart', function () {
        $scope.mobileMenuOpen = false;
    });

    // Retro Terminal Console State
    $scope.terminalOpen = false;
    $scope.terminalInput = '';
    $scope.terminalHistory = [
        'GULAM_MAHEEN_KHADER CORE_SHELL // ONLINE',
        'SYSTEM INITIALIZED. VERSION 8.2.1',
        'TYPE "help" TO SEE LIST OF DECODED COMMANDS.',
        ''
    ];

    $scope.toggleTerminal = function () {
        $scope.terminalOpen = !$scope.terminalOpen;
        if ($scope.terminalOpen) {
            setTimeout(function () {
                var inputEl = document.getElementById('terminal-input-field');
                if (inputEl) inputEl.focus();
            }, 100);
        }
    };

    $scope.processCommand = function (cmd) {
        if (!cmd) return;
        var cleanCmd = cmd.trim().toLowerCase();
        $scope.terminalHistory.push('> ' + cmd);

        switch (cleanCmd) {
            case 'help':
                $scope.terminalHistory.push('AUTHORIZED CORE INSTRUCTIONS:');
                $scope.terminalHistory.push('  help         - Display console manual');
                $scope.terminalHistory.push('  about        - View primary professional philosophy');
                $scope.terminalHistory.push('  projects     - Route system to Project Archive');
                $scope.terminalHistory.push('  achieve      - Route system to Logged Accolades');
                $scope.terminalHistory.push('  contact      - Route system to Communication Portal');
                $scope.terminalHistory.push('  clear        - Clear console history');
                $scope.terminalHistory.push('  status       - Read system runtime diagnostics');
                break;
            case 'about':
                $scope.terminalHistory.push('PHILOSOPHY: Bridging the structural permanence of');
                $scope.terminalHistory.push('classical engineering with dynamic, self-optimizing code.');
                break;
            case 'projects':
                $scope.terminalHistory.push('Redirecting to PROJECT_ARCHIVE...');
                $location.path('/projects');
                break;
            case 'achieve':
    $scope.terminalHistory.push('Redirecting to EXPERIENCE...');
    $location.path('/experience');
    break;
                break;
            case 'contact':
                $scope.terminalHistory.push('Redirecting to COMM_PORTAL...');
                $location.path('/contact');
                break;
            case 'clear':
                $scope.terminalHistory = [];
                break;
            case 'status':
                $scope.terminalHistory.push('SYSTEM: OPERATIONAL');
                $scope.terminalHistory.push('SPEED: 0.04ms ADAPTIVE LATENCY');
                $scope.terminalHistory.push('DOMAINS: AI, SECURITY, SCALE_CORE');
                $scope.terminalHistory.push('LOAD: STABLE [OK]');
                break;
            default:
                $scope.terminalHistory.push('Error: Directive "' + cmd + '" not recognized.');
        }

        $scope.terminalInput = '';

        // Auto-scroll terminal window to bottom
        setTimeout(function () {
            var scrollEl = document.getElementById('terminal-console');
            if (scrollEl) {
                scrollEl.scrollTop = scrollEl.scrollHeight;
            }
        }, 30);
    };
}]);

// View Controllers
app.controller('HomeController', ['$scope', function ($scope) {
    // Specific interactions for home page
}]);

app.controller('ProjectsController', ['$scope', function ($scope) {

$scope.projects = [
    {
        id: '#001',
        title: 'ASSET_MANAGEMENT_ERP',
        status: 'ACTIVE',
        tags: ['ANGULAR', 'JAVA', 'MONGODB', 'VERTX'],
        description: 'Enterprise Asset Management platform developed at Kristu Jayanti Software Development Centre featuring asset lifecycle management, issuance workflows, inventory tracking, role-based access control, and reporting dashboards.',
        image: 'images/asset.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#002',
        title: 'SAFESURF',
        status: 'DEPLOYED',
        tags: ['PYTHON', 'AI', 'CYBERSECURITY'],
        description: 'AI-powered browser safety platform that combines intelligent content filtering, parental controls, and real-time monitoring to create a safer online experience for children.',
        image: 'images/safesurf.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#003',
        title: 'HUMAN_EMOTION_DETECTOR',
        status: 'DEPLOYED',
        tags: ['PYTHON', 'NLP', 'SCIKIT_LEARN', 'LOGISTIC_REGRESSION'],
        description: 'Text emotion classification system trained on thousands of labeled samples to identify Joy, Sadness, Anger, Fear, Love, and Disgust using Natural Language Processing and Logistic Regression.',
        image: 'images/nn.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#004',
        title: 'FRAUD_DETECTION_SYSTEM',
        status: 'PRODUCTION_READY',
        tags: ['PYTHON', 'MACHINE_LEARNING', 'RANDOM_FOREST', 'SMOTE'],
        description: 'Fraud detection system built using Random Forest and SMOTE to address severe class imbalance, achieving high recall for identifying fraudulent transactions.',
        image: 'images/fraud.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#005',
        title: 'FOREST_COVER_PREDICTOR',
        status: 'DEPLOYED',
        tags: ['PYTHON', 'XGBOOST', 'STACKING_CLASSIFIER'],
        description: 'Ensemble machine learning model combining Random Forest and XGBoost to classify forest cover types from geographical and environmental attributes.',
        image: 'images/forestcover.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#006',
        title: 'MOBILE_PRICE_PREDICTOR',
        status: 'DEPLOYED',
        tags: ['PYTHON', 'MACHINE_LEARNING', 'RANDOM_FOREST'],
        description: 'Machine learning application that predicts mobile phone price ranges using device specifications and a complete preprocessing and prediction pipeline.',
        image: 'images/mobileprice.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#007',
        title: 'HEART_DISEASE_PREDICTOR',
        status: 'STABLE',
        tags: ['PYTHON', 'FLASK', 'HEALTHCARE_AI'],
        description: 'Healthcare machine learning application that predicts heart disease risk using Random Forest models trained on the UCI Heart Disease dataset with a Flask-based web interface.',
        image: 'images/heart.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#008',
        title: 'RESUME_ANALYZER',
        status: 'OPERATIONAL',
        tags: ['PYTHON', 'FLASK', 'NLP', 'GEMINI'],
        description: 'AI-powered resume analysis platform leveraging NLP and Gemini AI to extract resume insights, identify skill gaps, and provide personalized career recommendations.',
        image: 'images/ra.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#009',
        title: 'RESUME_BUILDER_AI',
        status: 'OPERATIONAL',
        tags: ['PYTHON', 'FLASK', 'GROQ_API'],
        description: 'Interactive AI resume builder that dynamically interviews users and generates professional resumes tailored to their experience, skills, and career goals.',
        image: 'images/rb.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    },
    {
        id: '#010',
        title: 'CYBER_WAR_ROOM',
        status: 'DEPLOYED',
        tags: ['HTML', 'JAVASCRIPT', 'CYBERSECURITY'],
        description: 'Interactive cybersecurity simulation platform where users participate in attack-and-defense scenarios against automated opponents while learning security concepts through gameplay.',
        image: 'images/cyberwarroom.png',
        actionText: 'VIEW_PROJECT',
        actionIcon: 'open_in_new'
    }
];
app.controller('ExperienceController', ['$scope', function ($scope) {
$scope.timeline2022 = [
    { period: '2026', title: 'BACKEND_DEVELOPER' },
    { period: '2025', title: 'ML_INTERN' },
    { period: '2025', title: 'WEB_DEVELOPER' },
    { period: '2024', title: 'BCA_STARTED' }
];

var scrollHandler = function () {
    var scrolled = window.pageYOffset;
    var medal = document.querySelector('.medal-parallax');

    if (medal) {
        medal.style.transform =
            'translate(-50%, calc(-50% + ' + (scrolled * 0.08) + 'px))';
    }
};

window.addEventListener('scroll', scrollHandler);

$scope.$on('$destroy', function () {
    window.removeEventListener('scroll', scrollHandler);
});


}]);


    $scope.timeline2022 = [
        { period: '2022.Q4', title: 'CYBER_SECURITY_VAL' },
        { period: '2022.Q3', title: 'DROSS_ELIMINATION' },
        { period: '2022.Q2', title: 'MOTIF_PIONEER' },
        { period: '2022.Q1', title: 'INITIATION_COMPLETE' }
    ];

    // Parallax scrolling for background medal
    var scrollHandler = function () {
        var scrolled = window.pageYOffset;
        var medal = document.querySelector('.medal-parallax');
        if (medal) {
            medal.style.transform = 'translate(-50%, calc(-50% + ' + (scrolled * 0.08) + 'px))';
        }
    };

    window.addEventListener('scroll', scrollHandler);

    // Garbage collection: clear listener when dynamic view changes
    $scope.$on('$destroy', function () {
        window.removeEventListener('scroll', scrollHandler);
    });
}]);

app.controller('ContactController', ['$scope', function ($scope) {
    // Form submissions / contact uplink controls
    
}]);

// AngularJS Directives for reusable micro-interactions
// Spotlight mouse follower for Neo-brutalism design cards
app.directive('technicalCard', function () {
    return {
        restrict: 'C',
        link: function (scope, element) {
            element.on('mousemove', function (e) {
                var rect = element[0].getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                element[0].style.setProperty('--mouse-x', x + 'px');
                element[0].style.setProperty('--mouse-y', y + 'px');
            });
        }
    };
});

// Branding text letter-spacing transition on hover
app.directive('headerBranding', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('mouseenter', function () {
                element[0].style.letterSpacing = '0.08em';
                element[0].style.transition = 'letter-spacing 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
            element.on('mouseleave', function () {
                element[0].style.letterSpacing = '-0.02em';
            });
        }
    };
});
