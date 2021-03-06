import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { hexToRgb } from '../../utils';

const Gengar = () => {
  const context = useContext(AppContext);
  const { state } = context;
  const { data, theme } = state;

  const { r, g, b } = hexToRgb(theme.colors.accent);

  const ContactItem = ({ icon, value }) =>
    value && (
      <div className="flex items-center mb-3">
        <div
          className="w-5 h-5 rounded-full flex justify-center items-center mr-2"
          style={{ backgroundColor: theme.colors.background }}
        >
          <i
            className="flex justify-center items-center material-icons text-xs"
            style={{ color: theme.colors.accent }}
          >
            {icon}
          </i>
        </div>
        <span className="text-sm font-medium">{value}</span>
      </div>
    );

  const Heading = ({ title }) => (
    <h6 className="font-bold text-xs uppercase tracking-wide mb-2">{title}</h6>
  );

  const SkillItem = x => (
    <li key={x} className="text-sm py-1">
      {x}
    </li>
  );

  const EducationItem = x => (
    <div key={x.name} className="mb-3">
      <div className="flex justify-between items-center">
        <div>
          <h6 className="font-semibold">
            {x.name}
            <small className="ml-2">
              {x.start !== '' && x.end !== '' && (
                <span className="text-xs font-medium">
                  ({x.start} - {x.end})
                </span>
              )}
            </small>
          </h6>
          <p className="text-xs">{x.major}</p>
        </div>
        <div className="flex flex-col text-right items-end">
          <span className="text-sm font-bold" style={{ color: theme.colors.accent }}>
            {x.grade}
          </span>
        </div>
      </div>
      <p className="mt-2 text-sm">{x.description}</p>
    </div>
  );

  const AwardCertificationItem = x => (
    <div key={x.title} className="mb-3">
      <h6 className="font-semibold">{x.title}</h6>
      <p className="text-xs">{x.subtitle}</p>
    </div>
  );

  const WorkItem = x => (
    <div key={x.title} className="mb-3">
      <div className="flex justify-between items-center">
        <div>
          <h6 className="font-semibold">{x.title}</h6>
          <p className="text-xs">{x.role}</p>
        </div>
        <span className="text-xs font-medium">
          ({x.start} - {x.end})
        </span>
      </div>
      <p className="mt-2 text-sm">{x.description}</p>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: theme.font.family,
        backgroundColor: theme.colors.background,
        color: theme.colors.primary,
      }}
    >
      <div className="grid grid-cols-5">
        <div
          className="col-span-2 px-6 py-8 break-all"
          style={{ backgroundColor: theme.colors.accent, color: theme.colors.background }}
        >
          <div className="flex items-center">
            {data.profile.photo !== '' && (
              <img
                className="w-24 h-24 rounded-full mr-4 object-cover border-4"
                style={{
                  borderColor: theme.colors.background,
                }}
                src={data.profile.photo}
                alt="Resume Photograph"
              />
            )}
            <div>
              <h1 className="text-3xl font-bold">{data.profile.firstName}</h1>
              <h1 className="text-3xl font-bold">{data.profile.lastName}</h1>
            </div>
          </div>

          <hr className="w-1/4 my-5 opacity-50" />

          <ContactItem icon="phone" value={data.profile.phone} />
          <ContactItem icon="alternate_email" value={data.profile.email} />
          <ContactItem icon="language" value={data.profile.website} />
          <ContactItem icon="location_on" value={data.profile.address.line3} />
        </div>

        <div
          className="col-span-3 px-6 py-8"
          style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)` }}
        >
          {data.objective.enable && (
            <div className="h-full flex flex-col justify-center items-start">
              <Heading title={data.objective.heading} />
              <p className="text-sm whitespace-pre-wrap">{data.objective.body}</p>
            </div>
          )}
        </div>

        <div
          className="col-span-2 px-6 py-8"
          style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, 0.1)` }}
        >
          {data.skills.enable && (
            <div className="mb-8">
              <Heading title={data.skills.heading} />
              <ul className="list-disc ml-5">{data.skills.items.map(SkillItem)}</ul>
            </div>
          )}

          {data.education.enable && (
            <div className="mb-8">
              <Heading title={data.education.heading} />
              {data.education.items.map(EducationItem)}
            </div>
          )}

          {data.certifications.enable && (
            <div className="mb-8">
              <Heading title={data.certifications.heading} />
              {data.certifications.items.map(AwardCertificationItem)}
            </div>
          )}
        </div>

        <div className="col-span-3 px-6 py-8">
          {data.work.enable && (
            <div className="mb-8">
              <Heading title={data.work.heading} />
              {data.work.items.map(WorkItem)}
            </div>
          )}

          {data.awards.enable && (
            <div className="mb-8">
              <Heading title={data.awards.heading} />
              {data.awards.items.map(AwardCertificationItem)}
            </div>
          )}

          {data.extras.enable && (
            <div>
              <Heading title={data.extras.heading} />
              <table className="table-auto">
                <tbody>
                  {data.extras.items.map(x => (
                    <tr key={x.key}>
                      <td className="border font-medium px-4 py-2 text-sm">{x.key}</td>
                      <td className="border px-4 py-2 text-sm">{x.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gengar;
