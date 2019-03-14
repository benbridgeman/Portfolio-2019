'use strict';

const e = React.createElement;

class Showcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.setState({
            projects: [
                {
                    title: 'D&AD Entry - Tinker Tailor Soldier Spy',
                    category: 'Illustration',
                    image: 'https://goo.gl/wnrfz2'
                },
                {
                    title: 'Mixed Media Info',
                    category: 'Graphic Design',
                    image: 'https://goo.gl/ZkTBRd'
                },
                {
                    title: 'Pixel Art Maker',
                    category: 'Web Development',
                    image: 'https://goo.gl/1KUYtj'
                },
                {
                    title: 'Trick Pixel Logo',
                    category: 'Graphic Design & Illustration',
                    image: 'https://goo.gl/ZNz1Z1'
                },
                {
                    title: 'SBP Site Maintenance',
                    category: 'CMS Joomla',
                    image: 'https://goo.gl/K12KCr'
                },
                {
                    title: 'Brighton Times Responsive Project',
                    category: 'Web Design',
                    image: 'https://goo.gl/EPAg5w'
                }
            ]
        });
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#showcase');
ReactDOM.render(e(Showcase), domContainer);