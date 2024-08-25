export default function generateRoutes() {
const routes = [];
const routeComponents = import.meta.glob("/src/components/**/*.vue");
const routeDocs = import.meta.glob('/src/content/**/*.md');
const routeModules = {...routeComponents, ...routeDocs};
Object.keys(routeModules).forEach((filePath) => {
const path = filePath.replace('/src', '').replace('/components', '').replace('/content', '').replace('.vue', '').replace('.md', '').replace('index', '');
const componentName = path.split('/').pop();
routes.push({path, name: componentName, component: routeModules[filePath]});
});
return routes;
}
