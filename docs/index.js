import package_info from '../package.json';
import components from './components';
import directives from './directives';

export default {
    package_info,
    nav: [
        {
            title: 'BootstrapVue',
            slug: '',
            pages: [
                {title: 'Quick Start', slug: '/'},
                {title: 'Contributing', slug: 'contributing'},
                {title: 'Release Notes', slug: 'changelog'}
            ]
        },
        {
            title: 'Components',
            slug: 'components/',
            pages: Object.keys(components).map(key => {
                return {
                    title: components[key].meta.title,
                    new: components[key].meta.new,
                    slug: key
                };
            })
        },
        {
            title: 'Directives',
            slug: 'directives/',
            pages: Object.keys(directives).map(key => {
                return {
                    title: directives[key].meta.title,
                    slug: key
                };
            })
        }
    ]
};
